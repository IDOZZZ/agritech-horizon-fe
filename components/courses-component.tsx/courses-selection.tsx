import CourseCard from "@/components/ui/course-card"
import SectionHeader from "@/components/ui/section-header"

// Data untuk semua kelas
const courses = [
  // Baris 1
  {    id: 1,
    title: "Belajar Pembibitan",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus",
    image: "/farming.jpg",
    category: "Pembibitan",
    row: 1,
  },
  {
    id: 2,
    title: "Media Tanam",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus",
    image: "/farming.jpg",
    category: "Media Tanam",
    row: 1,
  },
  {    id: 3,
    title: "Media Hidroponik",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus",
    image: "/farming.jpg",
    category: "Hidroponik",
    row: 1,
  },
  {
    id: 4,
    title: "Belajar Pembibitan",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus",
    image: "/farming.jpg",
    category: "Pembibitan",
    row: 1,
  },
  {    id: 9,
    title: "Media Tanam Lanjutan",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus",
    image: "/farming.jpg",
    category: "Media Tanam",
    row: 1,
  },
  {
    id: 10,
    title: "Teknik Hidroponik",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus",
    image: "/farming.jpg",
    category: "Hidroponik",
    row: 1,
  },
  // Baris 2
  {    id: 5,
    title: "Belajar Pembibitan",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus",
    image: "/farming.jpg",
    category: "Pembibitan",
    row: 2,
  },
  {
    id: 6,
    title: "Media Tanam",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus",
    image: "/farming.jpg",
    category: "Media Tanam",
    row: 2,
  },
  {    id: 7,
    title: "Media Hidroponik",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus",
    image: "/farming.jpg",
    category: "Hidroponik",
    row: 2,
  },
  {
    id: 8,
    title: "Belajar Pembibitan",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus",
    image: "/farming.jpg",
    category: "Pembibitan",
    row: 2,
  },
  {
    id: 11,
    title: "Pertanian Organik",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus",
    image: "/farming.jpg",
    category: "Organik",
    row: 2,
  },
  {
    id: 12,
    title: "Teknik Panen",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus",
    image: "/farming.jpg",
    category: "Panen",
    row: 2,
  },
]


export default function CourseSelection() {
  // Filter courses by row
  const row1Courses = courses.filter((course) => course.row === 1)
  const row2Courses = courses.filter((course) => course.row === 2)

  return (
    <section className="py-16 bg-white">
      {/* Header dalam container */}
      <div className="container px-4 mx-auto mb-12">
        <SectionHeader title="Temukan Kelas sesuai dengan Kebutuhanmu" />
      </div>

      {/* Scrollable container yang dimulai dari posisi yang sama dengan container */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="container mx-auto" style={{ maxWidth: "1550px" }}>
          <div className="grid grid-rows-2 gap-6 pb-4 pl-4 pr-4" style={{ width: "max-content" }}>
            {/* Row 1 */}
            <div className="flex gap-6">
              {row1Courses.map((course) => (
                <div key={course.id} className="w-[270px] flex-shrink-0">
                  <CourseCard
                    title={course.title}
                    description={course.description}
                    image={course.image}
                    category={course.category}
                  />
                </div>
              ))}
            </div>

            {/* Row 2 */}
            <div className="flex gap-6">
              {row2Courses.map((course) => (
                <div key={course.id} className="w-[270px] flex-shrink-0">
                  <CourseCard
                    title={course.title}
                    description={course.description}
                    image={course.image}
                    category={course.category}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
