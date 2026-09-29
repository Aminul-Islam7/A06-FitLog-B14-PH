# FitLog

Train with intent. Log every set.

FitLog is a dark-mode, zero-fluff gym companion for lifters who want to pick their exercises, lock in today's routine, and get to work without navigating social feeds, subscriptions, or bloated animations.

---

## Live Links

- **Web App**: [a06-fitlog-b14-ph.vercel.app](https://a06-fitlog-b14-ph.vercel.app/)
- **Repository**: [github.com/Aminul-Islam7/A06-FitLog-B14-PH](https://github.com/Aminul-Islam7/A06-FitLog-B14-PH)

---

## Features

- **Curated Movement Library**: Twelve fundamental compound and isolation lifts mapped across major muscle groups, complete with equipment needs, estimated burn, and rating telemetry.
- **Deep Workout Breakdown**: Statically pre-rendered detail routes with step-by-step form cues, target sets, rep ranges, and difficulty levels.
- **Today's Plan with Live Volume**: Real-time aggregation of total exercise count, session duration, and projected calorie burn. Automatically recalculates on every change.
- **Five-Lift Governor**: Hard cap of five movements per day to prevent junk volume. Finish today's work before loading more.
- **Execution Tracking & Fast Triage**: Toggle lifts as completed with single-click confirmation, dismiss exercises you skip, or stash them for later in your saved vault.
- **Dynamic Sorting & Instant Recall**: Sort workouts by duration, calories, or rating. Everything persists in local storage so your active session survives page reloads and spotty gym Wi-Fi.

---

## Tech Stack

- **Framework**: Next.js 16 (App Router, Server Components, SSG)
- **Library**: React 19
- **Styling**: Tailwind CSS v4
- **Components**: Base UI & Radix primitives
- **Icons**: Lucide React
- **Notifications**: Sonner
- **Typography**: Oswald & Inter

---

## Local Setup

### Prerequisites
Node.js 18.18+ and npm (or pnpm / yarn).

```bash
# Clone
git clone https://github.com/Aminul-Islam7/A06-FitLog-B14-PH.git
cd a06-fitlog-b14-ph

# Install
npm install

# Start local dev
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build for Production

```bash
npm run build
npm run start
```

