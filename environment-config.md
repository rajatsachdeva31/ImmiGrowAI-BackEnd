# Backend Environment Configuration

Copy the content below to your `.env` file in the BackEnd directory:

```env
# ==========================================
# SUPABASE CONFIGURATION
# ==========================================
SUPABASE_URL=your_supabase_project_url
SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# ==========================================
# APPLICATION CONFIGURATION
# ==========================================
NODE_ENV=development
PORT=5500

# ==========================================
# SECURITY
# ==========================================
AES_SECRET_KEY=12345678901234567890123456789012

# ==========================================
# EMAIL CONFIGURATION
# ==========================================
EMAIL_USER=innov8ivetech.humber@gmail.com
EMAIL_PASS=Capstone123@

# ==========================================
# GOOGLE CALENDAR INTEGRATION (Optional)
# ==========================================
# GOOGLE_CLIENT_ID=your_google_client_id
# GOOGLE_CLIENT_SECRET=your_google_client_secret
# GOOGLE_REDIRECT_URI=http://localhost:5500/auth/google/callback
```

## Variables Removed from Your Current .env:

### ❌ Firebase Variables (No longer needed):
- `FIREBASE_API_KEY`
- `FIREBASE_AUTH_URL`
- `FIREBASE_PROJECT_ID`
- `AES_IV` (Supabase handles auth encryption)

### ❌ Neon/Prisma Variables (No longer needed):
- `DATABASE_URL`
- `DATABASE_URL_UNPOOLED`
- `PGHOST`, `PGHOST_UNPOOLED`
- `PGUSER`, `PGDATABASE`, `PGPASSWORD`
- `POSTGRES_URL`, `POSTGRES_URL_NON_POOLING`
- `POSTGRES_USER`, `POSTGRES_HOST`
- `POSTGRES_PASSWORD`, `POSTGRES_DATABASE`
- `POSTGRES_URL_NO_SSL`, `POSTGRES_PRISMA_URL`

### ✅ Variables Preserved:
- `AES_SECRET_KEY` (for any remaining encryption needs)
- `EMAIL_USER` and `EMAIL_PASS` (for email functionality)

## Notes:
- Replace `your_supabase_*` values with your actual Supabase project credentials
- The `EMAIL_USER` and `EMAIL_PASS` are preserved for email notifications
- All database connection strings are replaced by Supabase configuration
- Firebase authentication is completely replaced by Supabase Auth

## Total Reduction:
**Before**: 22 environment variables  
**After**: 8 environment variables  
**Reduction**: 14 fewer variables to manage! 