# Domain Change Instructions for AGpro Extras Website

This document provides detailed instructions for changing the domain of your website from the current manus.space subdomain to your own custom domain.

## Current Setup

Your website is currently hosted at: `https://fdffphgs.manus.space`

## Domain Change Options

### Option 1: Register Your Own Domain

1. **Register a Domain Name**:
   - Choose a domain registrar (GoDaddy, Namecheap, Google Domains, etc.)
   - Register your preferred domain (e.g., `agproextras.com` or `ahmed-agpro.com`)
   - Complete the registration process and payment

2. **DNS Configuration**:
   - Log in to your domain registrar's control panel
   - Navigate to the DNS management section
   - Add the following DNS records:

     **A Record**:
     - Name: `@` (or leave blank)
     - Value: The IP address of the hosting server (will be provided upon request)
     - TTL: 3600 (or default)

     **CNAME Record**:
     - Name: `www`
     - Value: Your current domain (`fdffphgs.manus.space`)
     - TTL: 3600 (or default)

3. **Wait for DNS Propagation**:
   - DNS changes can take 24-48 hours to propagate globally
   - You can check propagation status using tools like [whatsmydns.net](https://www.whatsmydns.net/)

### Option 2: Use a Free Subdomain

If you prefer not to purchase a domain immediately, you can use a free subdomain service:

1. **Create an Account**:
   - Sign up for a free service like Freenom, DuckDNS, or No-IP
   - Select an available subdomain (e.g., `agproextras.tk` or `ahmed-agpro.cf`)

2. **Configure DNS**:
   - Add a CNAME record pointing to your current domain (`fdffphgs.manus.space`)
   - Follow the service's specific instructions for DNS configuration

## Website Configuration Updates

After setting up your new domain, some adjustments may be needed:

1. **Update Internal Links** (if necessary):
   - If you've used absolute URLs within your site, they'll need to be updated
   - This has been minimized in your current site design by using relative URLs

2. **SSL Certificate**:
   - Request a new SSL certificate for your custom domain
   - Many hosting providers offer free Let's Encrypt certificates

3. **Email Configuration** (Optional):
   - If you want to use email with your new domain (e.g., `contact@agproextras.com`)
   - Set up MX records according to your email provider's instructions

## Testing After Domain Change

After changing your domain, thoroughly test:

1. All pages load correctly
2. Contact form works properly
3. All links function as expected
4. Images and videos display correctly
5. Test on multiple devices and browsers

## Need Assistance?

If you need help with any part of this process, please contact me through the website contact form or directly at my email address.
