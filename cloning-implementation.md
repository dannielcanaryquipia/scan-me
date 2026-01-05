# Cloning the Admin System to Scan-Me Main Project

This document provides a step-by-step guide to implement the admin system from this project into the main Scan-Me project.

## Prerequisites

1. Node.js (v16 or later)
2. npm or yarn package manager
3. Existing React project (main Scan-Me project)
4. Supabase project with admin table

## Implementation Steps

### 1. Set Up Dependencies

Install required packages in your main project:

```bash
npm install @supabase/supabase-js react-router-dom
```

### 2. Configure Environment Variables

Create a `.env` file in your project root with:

```env
VITE_SUPABASE_URL=your_project_url
VITE_SUPABASE_ANON_KEY=your_anon_key
```

### 3. Set Up Supabase Client

Create `src/lib/supabaseClient.js`:

```javascript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);
export const supabase = isSupabaseConfigured ? 
  createClient(supabaseUrl, supabaseAnonKey) : null;
```

### 4. Create Admin Authentication Utilities

Create `src/admin/AdminAuth.js`:

```javascript
import { supabase, isSupabaseConfigured } from '../lib/supabaseClient';

export async function getSession() {
  if (!isSupabaseConfigured) return null;
  const { data } = await supabase.auth.getSession();
  return data?.session ?? null;
}

export async function isAdminUser(userId) {
  if (!isSupabaseConfigured) return false;
  if (!userId) return false;
  const { data, error } = await supabase
    .from('admins')
    .select('user_id')
    .eq('user_id', userId)
    .maybeSingle();
  return Boolean(data?.user_id);
}

export async function signInWithPassword(email, password) {
  if (!isSupabaseConfigured) {
    return { error: { message: 'Supabase is not configured' } };
  }
  return supabase.auth.signInWithPassword({ email, password });
}

export async function signOut() {
  if (!isSupabaseConfigured) return;
  await supabase.auth.signOut();
}
```

### 5. Create Admin Components

#### 5.1. Create `src/admin/RequireAdmin.jsx`:

```jsx
import { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { getSession, isAdminUser } from './AdminAuth';

const RequireAdmin = ({ children }) => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const verifyAdmin = async () => {
      try {
        const session = await getSession();
        if (session?.user?.id) {
          const isAdmin = await isAdminUser(session.user.id);
          setIsAuthenticated(isAdmin);
        }
      } catch (error) {
        console.error('Auth check failed:', error);
      } finally {
        setIsLoading(false);
      }
    };

    verifyAdmin();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace state={{ from: location }} />;
  }
  return children;
};

export default RequireAdmin;
```

#### 5.2. Create `src/admin/AdminLayout.jsx`:

```jsx
import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { signOut } from './AdminAuth';
import './admin.css';

const AdminLayout = () => {
  const navigate = useNavigate();

  const onSignOut = async () => {
    await signOut();
    navigate('/admin/login', { replace: true });
  };

  return (
    <div className="container admin-shell">
      <div className="admin-header">
        <div className="admin-brand">
          <h2 className="admin-title">Admin</h2>
          <div className="admin-nav">
            <Link className="btn btn-secondary" to="/admin/products">Products</Link>
            <Link className="btn btn-secondary" to="/admin/reviews">Reviews</Link>
          </div>
        </div>
        <button className="btn btn-secondary" onClick={onSignOut}>Sign out</button>
      </div>
      <Outlet />
    </div>
  );
};

export default AdminLayout;
```

### 6. Set Up Admin Routes

Update your main `App.jsx` to include admin routes:

```jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AdminLogin from './admin/AdminLogin';
import RequireAdmin from './admin/RequireAdmin';
import AdminLayout from './admin/AdminLayout';
import AdminProducts from './admin/AdminProducts';
import AdminReviews from './admin/AdminReviews';

function App() {
  return (
    <Router>
      <Routes>
        {/* Your existing routes */}
        
        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin"
          element={
            <RequireAdmin>
              <AdminLayout />
            </RequireAdmin>
          }
        >
          <Route index element={<Navigate to="products" replace />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="reviews" element={<AdminReviews />} />
        </Route>
        
        {/* Catch-all route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
```

### 7. Create Admin CSS

Create `src/admin/admin.css`:

```css
.admin-shell {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.admin-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
}

.admin-brand {
  display: flex;
  align-items: center;
  gap: 20px;
}

.admin-nav {
  display: flex;
  gap: 10px;
}

/* Add responsive styles as needed */
@media (max-width: 768px) {
  .admin-header {
    flex-direction: column;
    gap: 15px;
  }
  
  .admin-brand {
    flex-direction: column;
    text-align: center;
  }
}
```

### 8. Set Up Supabase Tables

Run these SQL commands in your Supabase SQL editor:

```sql
-- Create admins table
create table if not exists public.admins (
  user_id uuid references auth.users(id) primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security
alter table public.admins enable row level security;

-- Create policies
create policy "Admins can view all admins"
  on public.admins for select
  using ( true );

create policy "Admins can insert new admins"
  on public.admins for insert
  with check ( auth.uid() in (select user_id from public.admins) );

-- Insert first admin (run this with a valid user ID)
-- insert into public.admins (user_id) values ('YOUR_USER_ID');
```

### 9. Create Admin Login Component

Create `src/admin/AdminLogin.jsx`:

```jsx
import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { signInWithPassword } from './AdminAuth';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/admin';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const { error: signInError } = await signInWithPassword(email, password);
      
      if (signInError) throw signInError;
      
      // Navigate to the previous location or to the admin dashboard
      navigate(from, { replace: true });
    } catch (error) {
      setError(error.message || 'Failed to sign in');
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container" style={{ maxWidth: '400px', margin: '50px auto' }}>
      <h2>Admin Login</h2>
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button 
          type="submit" 
          className="btn btn-primary" 
          disabled={isLoading}
        >
          {isLoading ? 'Signing in...' : 'Sign In'}
        </button>
      </form>
      <div className="mt-3">
        <Link to="/">Back to Home</Link>
      </div>
    </div>
  );
};

export default AdminLogin;
```

### 10. Implement Admin Products & Reviews

Create the following components:
- `src/admin/AdminProducts.jsx`
- `src/admin/AdminReviews.jsx`

Refer to the existing implementation in the current project and adapt them to your main project's data structure.

## Testing the Implementation

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to `/admin/login`
3. Sign in with your admin credentials
4. Verify you can access the admin dashboard and protected routes

## Deployment Notes

1. Ensure all environment variables are set in your production environment
2. Set up proper CORS settings in your Supabase project
3. Consider adding rate limiting for the admin login endpoint
4. Set up proper error tracking and logging

## Troubleshooting

- **Authentication issues**: Verify your Supabase credentials and RLS policies
- **CORS errors**: Check your Supabase CORS settings
- **Missing styles**: Ensure all CSS files are properly imported
- **Database errors**: Verify table names and column names match your queries

## Next Steps

1. Implement the actual product and review management UIs
2. Add data validation and error handling
3. Implement loading states and better user feedback
4. Add tests for the admin components
5. Set up proper logging and monitoring
