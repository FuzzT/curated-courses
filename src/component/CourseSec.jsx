import CourseCard from './CourseCard'

const CourseSec = () => {
    // fake course data
    const courseData = [
        {
          thumbnail: 'https://i.ytimg.com/vi/SqcY0GlETPk/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBvF7R7tYEZqgAYn6fM5A_QgI1e-A',
          title: "React Tutorial for Beginners",
          Author: "Programming with Mosh",
          Rating: "4.5",
          Reviews: "222k+",
          Price: 0.00,
          views: '4M',
          duration: '1hr 20m',
          source: 'Youtube',
          tags: ["Reactjs", "TypeScript", "Tutorial"],
          level: "Beginner",
          keyHighlights: [
            "Introduction to React and JSX",
            "State management with hooks",
            "Handling events and user interactions",
            "Routing in React using React Router",
            "Fetching data from APIs",
          ],
        },
        {
          thumbnail: 'https://i.ytimg.com/vi/ix4z_jUrQpQ/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCQ96-PFsYdbG9douxKkFHpptKWyQ',
          title: "Advanced React Patterns for Pros",
          Author: "Mosh Hamedani",
          Rating: "4.9",
          Reviews: "30k+",
          Price: 29.99,
          views: '1M',
          duration: '2hr 20m',
          source: 'Udemy',
          tags: ["Reactjs", "Advanced", "Patterns"],
          level: "Advanced",
          keyHighlights: [
            "Advanced state management techniques",
            "Context API and useReducer",
            "Custom hooks and performance optimization",
            "React context vs Redux",
            "Unit testing with Jest and React Testing Library",
          ],
        },
        {
          thumbnail: 'https://i.ytimg.com/vi/d56mG7DezGs/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCZiZwQ9Ap0GztQfjTqf4FgoNGIoQ',
          title: "Learn TypeScript from Scratch",
          Author: "Programming with Mosh",
          Rating: "4.7",
          Reviews: "50k+",
          Price: 19.99,
          views: '3M',
          duration: '1hr 50m',
          source: 'Pluralsight',
          tags: ["TypeScript", "JavaScript", "Programming"],
          level: "Intermediate",
          keyHighlights: [
            "Learn basic to advanced TypeScript features",
            "Type annotations and interfaces",
            "Generics and advanced types",
            "Integrating TypeScript with React",
            "Building TypeScript projects from scratch",
          ],
        },
        {
          thumbnail: 'https://i.ytimg.com/vi/d56mG7DezGs/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCZiZwQ9Ap0GztQfjTqf4FgoNGIoQ',
          title: "Learn TypeScript from Scratch",
          Author: "Programming with Mosh",
          Rating: "4.7",
          Reviews: "50k+",
          Price: 19.99,
          views: '3M',
          duration: '1hr 50m',
          source: 'Pluralsight',
          tags: ["TypeScript", "JavaScript", "Programming"],
          level: "Intermediate",
          keyHighlights: [
            "Learn basic to advanced TypeScript features",
            "Type annotations and interfaces",
            "Generics and advanced types",
            "Integrating TypeScript with React",
            "Building TypeScript projects from scratch",
          ],
        },
      ];
      
      
  return (
    <div className='container w-full mx-auto px-6 md:px-2 py-12'>
        <h1 className='text-5xl/[0.8] font-medium pb-8'>Courses -</h1>
        <section className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 sm:gap-x-10 gap-y-4 md:gap-y-8  ">
            {courseData.map((course, index) => (
                <CourseCard key={index} course={course} />
            ))}
        </section>
    </div>

  )
}

export default CourseSec
