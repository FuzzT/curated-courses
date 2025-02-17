import { ArrowPathIcon, CloudArrowUpIcon, LockClosedIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Push to deploy',
    description: 'Lorem ipsum dolor sit amet consect adipiscing elit. Donec mollis nulla eget massa bibendum.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates',
    description: 'Pellentesque eu mi vel lectus aliquam bibendum. Nullam consectetur ornare imperdiet.',
    icon: LockClosedIcon,
  },
  {
    name: 'Simple queues',
    description: 'Sed tristique neque nec massa tincidunt, sit amet facilisis lectus vulputate. Fusce pulvinar.',
    icon: ArrowPathIcon,
  },
]

export default function FeatureCards() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Everything you need</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            No server? No problem.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                <div className="mt-6">
                  <a 
                    href="#" 
                    className="text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500 transition-colors"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}