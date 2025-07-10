# Token Project

## Deployment Setup

### GitHub Secrets Setup

To enable automatic deployment to cPanel, you need to set up the following secrets in your GitHub repository:

1. Go to your GitHub repository
2. Click on "Settings"
3. Click on "Secrets and variables" → "Actions"
4. Add the following secrets:
   - `FTP_SERVER`: Your cPanel FTP server (e.g., ftp.yourdomain.com)
   - `FTP_USERNAME`: Your cPanel FTP username
   - `FTP_PASSWORD`: Your cPanel FTP password
   - `FTP_SERVER_DIR`: The directory on your cPanel server where the files should be deployed (e.g., /public_html/)

### cPanel Setup

1. Log in to your cPanel account
2. Go to "FTP Accounts"
3. Create a new FTP account or use an existing one
4. Make sure the FTP account has access to the directory where you want to deploy your files
5. Note down the FTP credentials to use in GitHub secrets

### Deployment Process

The deployment process is automated using GitHub Actions. When you push to the main branch:

1. GitHub Actions will run the workflow
2. It will install dependencies
3. Build the project (if applicable)
4. Deploy the files to your cPanel server using FTP

### Manual Deployment

If you need to deploy manually:

1. Build your project (if applicable)
2. Upload the files to your cPanel server using FTP
3. Make sure to maintain the same directory structure

## Development

### Local Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

### Project Structure

- `assets/` - Contains all static assets (images, CSS, JS)
- `.github/workflows/` - Contains GitHub Actions workflow files
- `index.html` - Main HTML file.
