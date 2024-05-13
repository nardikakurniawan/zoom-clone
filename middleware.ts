import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const proctedRoutes = createRouteMatcher([
  '/',
  '/upcoming',
  '/previous',
  '/recordings',
  '/personal-room',
  '/meeting(.*)',
]);

export default clerkMiddleware((auth, req) => {
  if (proctedRoutes(req)) auth().protect();
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
