import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from '../Pages/Footer';
import ScrollToTop from '../Portfolio/ScrollToTop';

const MainPort = lazy(() => import('../Pages/MainPort'));
const About = lazy(() => import('../Pages/About'));
const Contact = lazy(() => import('../Pages/Contact'));
const Aplayground = lazy(() => import('../Pages/Aplayground'));
const NotFound = lazy(() => import('../Pages/NotFound'));

const BMIcalc = lazy(() => import('../Playgroung/BMIcalc'));
const JsonFormatter = lazy(() => import('../Playgroung/JsonFormatter'));
const RegexTester = lazy(() => import('../Playgroung/RegexTester'));
const ApiTester = lazy(() => import('../Playgroung/ApiTester'));
const ColorPalette = lazy(() => import('../Playgroung/ColorPalette'));
const MarkdownPreview = lazy(() => import('../Playgroung/MarkdownPreview'));
const GradientGenerator = lazy(() => import('../Playgroung/GradientGenerator'));
const TypingTest = lazy(() => import('../Playgroung/TypingTest'));
const GlassGenerator = lazy(() => import('../Playgroung/GlassGenerator'));
const ShapeGenerator = lazy(() => import('../Playgroung/ShapeGenerator'));
const FlexGridPlayground = lazy(() => import('../Playgroung/FlexGridPlayground'));
const ImageCompressor = lazy(() => import('../Playgroung/ImageCompressor'));
const Guestbook = lazy(() => import('../Playgroung/Guestbook'));

const PageLoader = () => (
    <div className="bg-ink min-h-screen flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-line border-t-accent rounded-full animate-spin" />
    </div>
);

const Routing = () => {
  return (
    <>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<MainPort />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/aplayground" element={<Aplayground />} />
              {/* <Route path="/aplayground/bmicalc" element={<BMIcalc />} /> */}
              <Route path="/aplayground/json-formatter" element={<JsonFormatter />} />
              <Route path="/aplayground/regex-tester" element={<RegexTester />} />
              <Route path="/aplayground/api-tester" element={<ApiTester />} />
              <Route path="/aplayground/color-palette" element={<ColorPalette />} />
              <Route path="/aplayground/markdown-preview" element={<MarkdownPreview />} />
              <Route path="/aplayground/gradient-generator" element={<GradientGenerator />} />
              <Route path="/aplayground/typing-test" element={<TypingTest />} />
              <Route path="/aplayground/glass-generator" element={<GlassGenerator />} />
              <Route path="/aplayground/shape-generator" element={<ShapeGenerator />} />
              <Route path="/aplayground/flex-grid-playground" element={<FlexGridPlayground />} />
              <Route path="/aplayground/image-compressor" element={<ImageCompressor />} />
              <Route path="/aplayground/guestbook" element={<Guestbook />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
        </Suspense>
        <Footer />
    </>
  );
};

export default Routing;