import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Phone, Mail, MapPin, Clock, Home, ArrowRight, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Reveal } from "@/components/Reveal";
import { useT } from "@/lib/i18n";
import { CONTACT_SUBJECTS, PHONE_IS_PLACEHOLDER } from "@/lib/contact";
import { sendContactMessage } from "@/lib/api/forms.functions";
import contactHero from "@/assets/contact-hero.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Persoonlijk advies bij erfenis | De Erfeniswijzer" },
      {
        name: "description",
        content:
          "Neem vrijblijvend contact op met De Erfeniswijzer. Plan een gratis adviesgesprek over nalatenschap of erfenis — telefonisch of bij u thuis.",
      },
      { property: "og:title", content: "Contact — De Erfeniswijzer" },
      {
        property: "og:description",
        content:
          "Wij staan klaar om u persoonlijk te helpen. Plan vrijblijvend een adviesgesprek over nalatenschap en erfenis.",
      },
      { property: "og:image", content: contactHero },
      { property: "twitter:image", content: contactHero },
    ],
  }),
  component: Contact,
});

const detailIcons = [Phone, Mail, MapPin, Clock];

/**
 * De icoontjes horen op volgorde bij h.details, dus koppelen we ze vóórdat we
 * eventueel het telefoonnummer weglaten — anders schuift de hele reeks een plek op.
 */
function useContactDetails(details: readonly { label: string; value: string; href?: string }[]) {
  return details
    .map((item, i) => ({ ...item, Icon: detailIcons[i] }))
    .filter((item) => !(PHONE_IS_PLACEHOLDER && item.href?.startsWith("tel:")));
}

function Contact() {
  const navigate = useNavigate();
  const t = useT();
  const h = t.contact;
  const details = useContactDetails(h.details);

  const contactSchema = z.object({
    naam: z.string().trim().min(2, { message: h.errorName }).max(100, { message: h.errorNameMax }),
    telefoon: z
      .string()
      .trim()
      .min(6, { message: h.errorPhone })
      .max(20, { message: h.errorPhoneMax })
      .regex(/^[0-9+()\s-]+$/, { message: h.errorPhoneFormat }),
    email: z
      .string()
      .trim()
      .email({ message: h.errorEmail })
      .max(255, { message: h.errorEmailMax }),
    // errorMap in plaats van alleen required_error: die laatste dekt alleen een
    // ontbrekende waarde, waardoor een niet-herkende keuze de ruwe Engelse
    // Zod-tekst ("Invalid enum value. Expected …") in beeld bracht.
    onderwerp: z.enum(CONTACT_SUBJECTS, { errorMap: () => ({ message: h.errorSubject }) }),
    bericht: z
      .string()
      .trim()
      .min(10, { message: h.errorMessage })
      .max(1500, { message: h.errorMessageMax }),
  });

  type ContactValues = z.infer<typeof contactSchema>;

  const form = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      naam: "",
      telefoon: "",
      email: "",
      onderwerp: "anders",
      bericht: "",
    },
  });

  async function onSubmit(values: ContactValues) {
    try {
      await sendContactMessage({ data: values });
      toast.success(h.toastTitle, { description: h.toastDesc });
      form.reset();
      navigate({ to: "/bedankt" });
    } catch (error) {
      // Niet doorsturen naar /bedankt: die pagina belooft dat het bericht is
      // aangekomen. De ingevulde tekst blijft staan zodat niemand zijn verhaal
      // opnieuw hoeft te typen.
      console.error("[contact] versturen mislukt:", error);
      toast.error(h.errorToastTitle, { description: h.errorToastDesc });
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="on-dark relative isolate overflow-hidden">
        <img
          src={contactHero}
          alt="Warm gesprek tussen een adviseur van De Erfeniswijzer en een ouder echtpaar aan de keukentafel"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/30" />
        <div className="relative mx-auto flex min-h-[58vh] max-w-6xl flex-col justify-center px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl leading-[1.08] text-primary-foreground sm:text-5xl md:text-6xl">
              {h.heroTitle}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/90">
              {h.heroIntro}
            </p>
          </div>
        </div>
      </section>

      {/* Details + form */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            {/* Left: details */}
            <Reveal className="space-y-8">
              <div>
                <p className="text-lg leading-relaxed text-muted-foreground">{h.directText}</p>
              </div>

              <ul className="space-y-5">
                {details.map(({ Icon, ...item }) => {
                  return (
                    <li key={item.label} className="flex items-start gap-4">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-secondary text-primary">
                        <Icon className="h-6 w-6" strokeWidth={1.75} />
                      </span>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                          {item.label}
                        </p>
                        {"href" in item && item.href ? (
                          <a
                            href={item.href}
                            className="break-words text-lg text-primary transition-colors hover:text-accent-ink"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="break-words text-lg text-primary">{item.value}</p>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>

              <div className="flex items-start gap-4 rounded-2xl border border-accent/30 bg-accent/10 p-6">
                <Home className="mt-0.5 h-6 w-6 shrink-0 text-accent-ink" strokeWidth={1.75} />
                <div>
                  <h3 className="text-lg text-primary">{h.homeVisitTitle}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {h.homeVisitText}
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Right: form */}
            <Reveal delay={120}>
              <div className="rounded-[2rem] border border-border/60 bg-card p-8 shadow-[var(--shadow-elegant)] sm:p-10">
                <h2 className="text-2xl text-primary sm:text-3xl">{h.formTitle}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {h.formSubtitle}
                </p>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="naam"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{h.fieldName}</FormLabel>
                            <FormControl>
                              <Input
                                placeholder={h.fieldNamePlaceholder}
                                autoComplete="name"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="telefoon"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{h.fieldPhone}</FormLabel>
                            <FormControl>
                              <Input
                                type="tel"
                                placeholder={h.fieldPhonePlaceholder}
                                autoComplete="tel"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{h.fieldEmail}</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder={h.fieldEmailPlaceholder}
                              autoComplete="email"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="onderwerp"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{h.fieldSubject}</FormLabel>
                          <FormControl>
                            <RadioGroup
                              value={field.value}
                              onValueChange={field.onChange}
                              className="grid gap-3 sm:grid-cols-3"
                            >
                              {h.subjectOptions.map((opt) => (
                                <label
                                  key={opt.value}
                                  htmlFor={`onderwerp-${opt.value}`}
                                  className="flex cursor-pointer items-center gap-3 rounded-xl border border-border bg-background px-4 py-3 text-sm transition-colors hover:border-accent has-[:checked]:border-accent has-[:checked]:bg-accent/10"
                                >
                                  <RadioGroupItem id={`onderwerp-${opt.value}`} value={opt.value} />
                                  <span className="text-foreground">{opt.label}</span>
                                </label>
                              ))}
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="bericht"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{h.fieldMessage}</FormLabel>
                          <FormControl>
                            <Textarea rows={5} placeholder={h.fieldMessagePlaceholder} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      size="lg"
                      disabled={form.formState.isSubmitting}
                      className="w-full rounded-full bg-accent px-8 py-6 text-base text-accent-foreground shadow-lg hover:bg-accent/90 disabled:opacity-100"
                    >
                      {form.formState.isSubmitting ? (
                        <>
                          {h.submitPending}
                          <Loader2 className="ml-2 h-5 w-5 animate-spin" aria-hidden="true" />
                        </>
                      ) : (
                        <>
                          {h.submitLabel}
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                    <p className="text-center text-xs text-muted-foreground">{h.privacy}</p>
                  </form>
                </Form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
