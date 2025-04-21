import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware();

export const config = {
  matcher: [
    /*
     * Protect everything except Clerk's auth pages.
     */
    '/((?!sign-in|sign-up|api|_next|favicon.ico).*)',
  ],
};
/*

 /app/sign-in/[[...rest]]/page.tsx
 /app/sign-up/[[...rest]]/page.tsx

*/