export default function FAQ() {
  const faqItems = [
    {
      title:
        'How does creating a portfolio and links with Project in Bio work?',
      description:
        'With Project in Bio, you can create a professional portfolio and a link page in just a few minutes. Our platform offers ready-made templates to make the process even easier.',
    },
    {
      title: 'Is there a free trial period?',
      description:
        'Yes! We offer a 7-day free trial, no commitment. This allows you to explore all the features of our platform before deciding to subscribe.',
    },
    {
      title: 'Can I customize the design of my portfolio?',
      description:
        'Yes! With Project in Bio, you can customize colors, fonts, and the layout of your portfolio to ensure it reflects your personal brand.',
    },
    {
      title: 'Do I need technical skills to use the platform?',
      description:
        'No! Our platform was designed to be simple and intuitive, so no technical knowledge is required. You can create and customize your portfolio easily.',
    },
    {
      title: 'What happens if I cancel my subscription?',
      description:
        'You can cancel your subscription at any time. Your portfolio and link page will remain available until the end of the paid period, but after that, access will be limited unless renewed.',
    },
    {
      title: 'Can I share my portfolio on social media?',
      description:
        'Yes! You can easily share your portfolio and link page on your social networks using a personalized link.',
    },
  ]

  return (
    <div className="my-20 flex flex-col items-center gap-16">
      <h3 className="text-4xl font-bold text-white">
        Frequent asked questions
      </h3>
      <div className="flex gap-3">
        <div className="flex flex-col gap-3">
          {faqItems.slice(0, Math.ceil(faqItems.length / 2)).map((item) => (
            <FAQItem
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
        <div className="flex flex-col gap-3">
          {faqItems
            .slice(Math.ceil(faqItems.length / 2), faqItems.length)
            .map((item) => (
              <FAQItem
                key={item.title}
                title={item.title}
                description={item.description}
              />
            ))}
        </div>
      </div>
    </div>
  )
}

function FAQItem({
  description,
  title,
}: {
  title: string
  description: string
}) {
  return (
    <div className="border-border-primary bg-background-primary flex h-min max-w-sm flex-col gap-3 rounded-2xl border p-5">
      <p className="font-bold text-white">{title}</p>
      <p className="text-content-body">{description}</p>
    </div>
  )
}
