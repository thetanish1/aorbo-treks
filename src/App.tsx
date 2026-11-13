import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';

// Lazy loaded page components
const Home = lazy(() => import('@/pages/Home').then((m) => ({ default: m.Home })));
const Destinations = lazy(() => import('@/pages/Destinations').then((m) => ({ default: m.Destinations })));
const DestinationDetail = lazy(() => import('@/pages/DestinationDetail').then((m) => ({ default: m.DestinationDetail })));
const WinterTreks = lazy(() => import('@/pages/WinterTreks').then((m) => ({ default: m.WinterTreks })));
const TrekDetail = lazy(() => import('@/pages/TrekDetail').then((m) => ({ default: m.TrekDetail })));
const TreksNear = lazy(() => import('@/pages/TreksNear').then((m) => ({ default: m.TreksNear })));
const Organisers = lazy(() => import('@/pages/Organisers').then((m) => ({ default: m.Organisers })));
const Blogs = lazy(() => import('@/pages/Blogs').then((m) => ({ default: m.Blogs })));
const BlogDetail = lazy(() => import('@/pages/BlogDetail').then((m) => ({ default: m.BlogDetail })));
const About = lazy(() => import('@/pages/About').then((m) => ({ default: m.About })));
const Safety = lazy(() => import('@/pages/Safety').then((m) => ({ default: m.Safety })));
const Contact = lazy(() => import('@/pages/Contact').then((m) => ({ default: m.Contact })));
const AppPromo = lazy(() => import('@/pages/AppPromo').then((m) => ({ default: m.AppPromo })));
const LegalPage = lazy(() => import('@/pages/LegalPage').then((m) => ({ default: m.LegalPage })));
const NotFound = lazy(() => import('@/pages/NotFound').then((m) => ({ default: m.NotFound })));

function RouteLoadingFallback() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-8">
      <div className="w-12 h-12 rounded-full border-4 border-slate-200 border-t-primary-700 animate-spin mb-4" />
      <span className="text-sm font-medium text-slate-500">Loading trail data...</span>
    </div>
  );
}

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <Suspense fallback={<RouteLoadingFallback />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="about"
          element={
            <Suspense fallback={<RouteLoadingFallback />}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="safety"
          element={
            <Suspense fallback={<RouteLoadingFallback />}>
              <Safety />
            </Suspense>
          }
        />
        <Route
          path="contact"
          element={
            <Suspense fallback={<RouteLoadingFallback />}>
              <Contact />
            </Suspense>
          }
        />
        <Route
          path="blogs"
          element={
            <Suspense fallback={<RouteLoadingFallback />}>
              <Blogs />
            </Suspense>
          }
        />
        <Route
          path="blogs/:slug"
          element={
            <Suspense fallback={<RouteLoadingFallback />}>
              <BlogDetail />
            </Suspense>
          }
        />
        <Route
          path="destinations"
          element={
            <Suspense fallback={<RouteLoadingFallback />}>
              <Destinations />
            </Suspense>
          }
        />
        <Route
          path="destinations/:slug"
          element={
            <Suspense fallback={<RouteLoadingFallback />}>
              <DestinationDetail />
            </Suspense>
          }
        />
        <Route
          path="winter-treks"
          element={
            <Suspense fallback={<RouteLoadingFallback />}>
              <WinterTreks />
            </Suspense>
          }
        />
        <Route
          path="treks/:slug"
          element={
            <Suspense fallback={<RouteLoadingFallback />}>
              <TrekDetail />
            </Suspense>
          }
        />
        <Route
          path="treks-near"
          element={
            <Suspense fallback={<RouteLoadingFallback />}>
              <TreksNear />
            </Suspense>
          }
        />
        <Route
          path="organisers"
          element={
            <Suspense fallback={<RouteLoadingFallback />}>
              <Organisers />
            </Suspense>
          }
        />
        <Route
          path="app"
          element={
            <Suspense fallback={<RouteLoadingFallback />}>
              <AppPromo />
            </Suspense>
          }
        />
        <Route
          path="terms"
          element={
            <Suspense fallback={<RouteLoadingFallback />}>
              <LegalPage />
            </Suspense>
          }
        />
        <Route
          path="privacy-policy"
          element={
            <Suspense fallback={<RouteLoadingFallback />}>
              <LegalPage />
            </Suspense>
          }
        />
        <Route
          path="user-agreement"
          element={
            <Suspense fallback={<RouteLoadingFallback />}>
              <LegalPage />
            </Suspense>
          }
        />
        <Route
          path="refund-policy"
          element={
            <Suspense fallback={<RouteLoadingFallback />}>
              <LegalPage />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<RouteLoadingFallback />}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
