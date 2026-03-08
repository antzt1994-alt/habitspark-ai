export default function Instructions() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-24">
      <h1 className="text-6xl font-bold spark-title mb-12">Instructions & Onboarding</h1>

      {/* Add your screenshots here with descriptions */}
      <div className="space-y-16">
        <div>
          <h2 className="text-4xl mb-6">1. What brings you here?</h2>
          <img src="/images/onboarding-what-brings.jpg" alt="What brings you here" className="rounded-3xl shadow-2xl" />
        </div>

        <div>
          <h2 className="text-4xl mb-6">2. Pick your first Sparks</h2>
          <img src="/images/onboarding-pick-sparks.jpg" alt="Pick Sparks" className="rounded-3xl shadow-2xl" />
        </div>

        {/* Add the rest the same way... */}
      </div>
    </div>
  );
}