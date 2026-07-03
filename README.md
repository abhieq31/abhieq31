<div align="center">

# Abhi Patel

**The mission is the boss.**

I build software.

</div>

---

## TOP 5 THINGS &nbsp; <sub>`T5T`</sub>

> At NVIDIA, everyone — newest engineer to CEO — writes a short note of the five
> things most on their mind: what they're **working on**, **watching**, and
> **troubled by**. Jensen Huang reads a hundred of them a day to catch the weak
> signal before it gets loud. This profile is mine — raw signal, not a résumé.

**1 · Working on —** [**Pragati**](https://github.com/abhieq31/Pragati), an
open-source project OS that runs on Jensen Huang's operating system as product
defaults: your highest-priority task spawns first thing each morning, a
first-class whiteboard, Top-5-Things signals flowing flat across the team, and
a *speed-of-light* delivery forecast (the theoretical fastest finish — the gap
to it is the queueing you can act on).

**2 · Working on —** [**ChurnLens**](https://github.com/abhieq31/Churn):
upload a CSV of customers, get who's about to leave, why, and the action that
moves the number. The entire ML pipeline — SMOTE, gradient-boosted trees, exact
TreeSHAP, calibration — hand-written in TypeScript and running **in your
browser**, verified against scikit-learn to `< 1e-6`. Your rows never leave
the page.

**3 · Watching —** how far *"explain the number or don't ship it"* scales.
[**StrokeGuard**](https://github.com/abhieq31/Stroke) is an explainable risk
engine that caps at an honest **0.842 ROC-AUC** and says so out loud — because
on that dataset, anyone advertising 99% is overfitting or lying.

**4 · Troubled by —** models graded on data they've already seen. A published
method applied SMOTE before the train/test split — synthetic copies of test
rows leaked into training. I rebuilt it leakage-free, in the open, and shipped
the honest number instead of the impressive one.

**5 · Thinking about —** zero-marginal-cost software for real small
businesses. [**The Nail Hubs**](https://github.com/abhieq31/thenailhubs) runs
a real salon's live booking calendar with a **database-level no-double-booking
guarantee** (a Postgres `EXCLUDE` constraint — correct by construction, not by
luck) and an on-device computer-vision try-on that costs nothing at any scale.

---

## How I work

- **Highest-priority work first.** Every morning, exactly the same way.
- **Whiteboard, not slides.** Sketch the problem before arguing the solution;
  wipe it clean when it's solved.
- **Intellectual honesty.** The honest number beats the impressive one —
  cross-validated, calibrated, held out.
- **The factory over the artifact.** One command retrains, self-verifies to
  `< 1e-6`, and ships. The model isn't the product; the factory is.
- **Evenings belong to my people.** The work will keep. Dinner won't.

## The record

| Ship | Mission | The honest number |
| --- | --- | --- |
| [Pragati](https://github.com/abhieq31/Pragati) | Everyone sees the whole board | ~57k lines TS · 294 tests · in production |
| [ChurnLens](https://github.com/abhieq31/Churn) | Find the leak, name the cause | ROC-AUC 0.911 ± 0.016, leakage-free |
| [StrokeGuard](https://github.com/abhieq31/Stroke) | The number, with its work shown | 0.842 ROC-AUC — the dataset's ceiling |
| [The Nail Hubs](https://github.com/abhieq31/thenailhubs) | A real business, running live | 49 tests · double-booking impossible by schema |
| [abhieq31.com](https://abhieq31.com) | Writing it down is part of the work | — |

---

<div align="center">

*"It's not about how many things you start. It's about what you finish."*

</div>
