# DevLink Web Deployment Guide

## Prerequisites
1. A [Vercel](https://vercel.com) account
2. [Git](https://git-scm.com/) installed on your machine
3. Your backend already deployed on Render

## Pre-deployment Steps

1. **Environment Variables**
   - Create a `.env` file in your project root (already done)
   - Set `VITE_API_URL` to your Render backend URL
   - Note: You'll need to add these in Vercel's dashboard too

2. **Build Testing**
   Run these commands locally to ensure everything builds correctly:
   ```bash
   npm install
   npm run build
   ```

## Deployment Steps

1. **Push Your Code to GitHub**
   ```bash
   git add .
   git commit -m "Prepare for deployment"
   git push origin main
   ```

2. **Deploy to Vercel**
   a. Go to [Vercel Dashboard](https://vercel.com/dashboard)
   b. Click "New Project"
   c. Import your GitHub repository
   d. Configure the project:
      - Framework Preset: Vite
      - Build Command: `npm run build`
      - Output Directory: `dist`
      - Install Command: `npm install`

3. **Environment Variables**
   Add these in Vercel dashboard (Settings → Environment Variables):
   ```
   VITE_API_URL=https://your-render-backend-url.onrender.com
   VITE_NODE_ENV=production
   ```

4. **Domain Settings (Optional)**
   - Go to Project Settings → Domains
   - Add your custom domain if you have one

## Post-deployment Checks

1. Test the deployed application:
   - User authentication
   - Profile updates
   - Connections functionality
   - Image uploads
   - All API integrations

2. Common issues to watch for:
   - CORS errors (ensure backend allows Vercel domain)
   - Environment variable misconfigurations
   - API endpoint issues

## Monitoring

1. Use Vercel's built-in analytics:
   - Deployment status
   - Build logs
   - Runtime errors
   - Performance metrics

## Troubleshooting

If you encounter issues:

1. **Build Failures**
   - Check build logs in Vercel dashboard
   - Verify all dependencies are properly installed
   - Check for syntax errors in code

2. **Runtime Errors**
   - Check browser console for errors
   - Verify environment variables are set correctly
   - Confirm API endpoints are accessible

3. **API Connection Issues**
   - Verify backend URL is correct
   - Check CORS configuration in backend
   - Ensure all API routes are working

## Maintenance

1. Regular tasks:
   - Monitor error logs
   - Update dependencies
   - Check performance metrics
   - Review security headers

2. Updates:
   - Test changes locally before pushing
   - Use Vercel's preview deployments for testing
   - Monitor build times and optimize if needed

## Need Help?

- Check [Vercel Documentation](https://vercel.com/docs)
- Review [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- Contact support if issues persist
