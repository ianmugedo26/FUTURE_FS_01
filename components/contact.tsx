export function Contact() {
  return (
    <section className="py-16 md:py-24 border-t border-border">
      <div className="max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
          Let's Connect
        </h2>

        <p className="text-base text-muted-foreground leading-relaxed mb-8">
          I'm always interested in hearing about new projects and opportunities. Feel free
          to reach out.
        </p>

        {/* Contact Methods */}
        <div className="space-y-6">
          {/* Email */}
          <div>
            <p className="text-sm font-semibold text-foreground uppercase tracking-wide mb-2">
              Email
            </p>
            <a
              href="mailto:mugedoian@gmail.com"
              className="text-base text-foreground hover:text-muted-foreground transition-colors"
            >
              mugedoian@gmail.com
            </a>
          </div>

          {/* Social Links */}
          <div>
            <p className="text-sm font-semibold text-foreground uppercase tracking-wide mb-3">
              Social
            </p>
            <div className="flex gap-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-foreground hover:text-muted-foreground transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ian-mugedo-aa02b2342/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-foreground hover:text-muted-foreground transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-foreground hover:text-muted-foreground transition-colors"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16 pt-8 border-t border-border">
        <p className="text-sm text-muted-foreground">
          © 2026 Alex Dev. All rights reserved.
        </p>
      </div>
    </section>
  )
}
