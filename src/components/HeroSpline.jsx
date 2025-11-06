import Spline from '@splinetool/react-spline';

export default function HeroSpline() {
  return (
    <div className="relative h-72 md:h-80 lg:h-96 w-full overflow-hidden rounded-xl border border-blue-900/50 bg-gradient-to-br from-[#071522] via-[#0B2136] to-[#0E2B47]">
      <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#0A2236]/20 to-[#0A2236]" />
    </div>
  );
}
