export default function BackgroundVideo() {
  return (
    <video
      className="fixed top-0 left-0 w-full h-full object-cover brightness-25 -z-10"
      autoPlay
      loop
      muted
      playsInline
    >
      <source src="/assets/hero-section-vid.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
