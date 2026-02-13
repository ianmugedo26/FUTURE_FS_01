import { Button } from './ui/button'

export function Hero() {
  return (
    <section className="flex flex-col items-start justify-center py-20 md:py-32">
      <div className="space-y-6 max-w-2xl">
        {/* Name - Large and bold */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
          Ian Mugedo
        </h1>

        {/* Subtitle - Clear role description */}
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          Full-stack engineer building elegant, performant web applications.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Button size="lg" className="bg-foreground text-background hover:opacity-90">
            Let's work together
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-foreground text-foreground hover:bg-foreground hover:text-background bg-transparent"
          >
            View Resume
          </Button>
        </div>
      </div>
    </section>
  )
}
