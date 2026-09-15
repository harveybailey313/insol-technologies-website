"use client";

import { useSearchParams } from "next/navigation";
import { Button } from "./Button";

export function ContactForm() {
  const searchParams = useSearchParams();
  const intent = searchParams.get("intent") || "start-project";
  const intentLabel =
    intent === "talk-expert" ? "Talk to an Expert" : "Start a Project";

  return (
    <form
      className="card-surface space-y-5 p-6 md:p-8"
      onSubmit={(e) => {
        e.preventDefault();
      }}
      noValidate
    >
      <div>
        <p className="eyebrow mb-2">Intent</p>
        <p className="text-sm text-text-secondary">{intentLabel}</p>
        <input type="hidden" name="intent" value={intent} />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" autoComplete="name" required />
        <Field
          label="Work email"
          name="email"
          type="email"
          autoComplete="email"
          required
        />
      </div>
      <Field label="Company" name="company" autoComplete="organization" />
      <div>
        <label htmlFor="brief" className="mb-2 block text-sm text-text-secondary">
          What are you solving?
        </label>
        <textarea
          id="brief"
          name="brief"
          rows={5}
          className="w-full rounded-[10px] border border-border bg-primary px-4 py-3 text-text placeholder:text-text-muted focus:border-accent focus:ring-[3px] focus:ring-accent-muted focus:outline-none"
          placeholder="Brief context on what you’re building, modernizing, or automating"
        />
      </div>
      <Button type="submit" size="lg" className="w-full sm:w-auto">
        Send message
      </Button>
      <p className="text-sm text-text-muted">
        Form UI only for this MVP — submissions are not yet wired to a backend.
        Prefer phone or visit us using the contact details shown.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm text-text-secondary">
        {label}
        {required && <span className="text-accent"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="h-12 w-full rounded-[10px] border border-border bg-primary px-4 text-text placeholder:text-text-muted focus:border-accent focus:ring-[3px] focus:ring-accent-muted focus:outline-none"
      />
    </div>
  );
}
