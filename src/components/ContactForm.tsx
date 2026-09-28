"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { SITE } from "@/lib/site";
import { Button } from "./Button";

export function ContactForm() {
  const searchParams = useSearchParams();
  const intent = searchParams.get("intent") || "start-project";
  const intentLabel =
    intent === "talk-expert" ? "Talk to an Expert" : "Start a Project";
  const [notice, setNotice] = useState(false);

  return (
    <form
      className="card-surface space-y-5 p-6 md:p-8"
      onSubmit={(e) => {
        e.preventDefault();
        setNotice(true);
      }}
      noValidate
    >
      <div>
        <p className="eyebrow mb-2">Your enquiry</p>
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
      {notice ? (
        <p role="status" className="rounded-[8px] border border-accent-border bg-accent-muted p-4 text-sm text-text">
          Thank you. Online submissions are not active yet, so your message has not been sent.
          Please call us at{" "}
          <a href={SITE.phoneHref} className="font-semibold text-accent underline">
            {SITE.phone}
          </a>{" "}
          and we will pick up the conversation from there.
        </p>
      ) : (
        <p className="text-sm text-text-muted">
          Online submissions are not active yet. For the fastest response, call{" "}
          <a href={SITE.phoneHref} className="text-accent hover:underline">
            {SITE.phone}
          </a>
          .
        </p>
      )}
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
