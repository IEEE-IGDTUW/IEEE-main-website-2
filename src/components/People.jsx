import { useState } from 'react';
import ProfileCard from './ProfileCard';

const BASE = `${import.meta.env.BASE_URL}IEEE Senior Execomm 2026-2027/`;

// =========================================================
// LEADERSHIP DATA
// =========================================================

const leadership = [
  {
    id: '01',
    name: 'Himani Gupta',
    role: 'IEEE Chairperson',
    image: `${BASE}HimaniGupta_IEEEChairperson.png`,
  },
  {
    id: '04',
    name: 'Anushree Jain',
    role: 'WIE Chairperson',
    image: `${BASE}Anushree Jain_WIE_Chairperson.jpeg`,
  },
  {
    id: '02',
    name: 'Gunjan Aggarwal',
    role: 'IEEE Vice-Chairperson',
    image: `${BASE}Gunjan Aggarwal_IEEE Vice-chairperson.JPG`,
  },
  {
    id: '05',
    name: 'Sneha Yadav',
    role: 'WIE Vice-Chairperson',
    image: `${BASE}Sneha Yadav _WIE Vice Chairperson_.jpg`,
  },
  {
    id: '03',
    name: 'Jessica Malik',
    role: 'IEEE General Secretary',
    image: `${BASE}Jessica Malik_IEEE GenSec.jpg`,
  },
  {
    id: '06',
    name: 'Muskan Goel',
    role: 'WIE General Secretary',
    image: `${BASE}Muskan Goel_WIE GenSec.png`,
  },
  {
    id: '07',
    name: 'Saanvi Singh',
    role: 'Treasurer',
    image: `${BASE}Saanvi_Singh_Treasurer.jpg`,
  },
];

// =========================================================
// DEPARTMENT HEADS DATA
// =========================================================

const heads = [
  {
    id: '08',
    name: 'Aakanksha Jha',
    role: 'Event Management Head',
    image: `${BASE}Aakanksha Jha _ EM Head.jpeg`,
  },
  {
    id: '09',
    name: 'Eshita Nagaria',
    role: 'Event Management Head',
    image: `${BASE}EshitaNagaria_EMHead.jpg`,
  },
  {
    id: '10',
    name: 'Likhila Vydana',
    role: 'Event Management Head',
    image: `${BASE}LikhilaVydana_EMHead.jpg`,
  },
  {
    id: '11',
    name: 'Aashi Garg',
    role: 'Technical Head',
    image: `${BASE}Aashi Garg_Tech Head.jpg`,
  },
  {
    id: '12',
    name: 'Parvati',
    role: 'Technical Head',
    image: `${BASE}PARVATI_TECH HEAD.png`,
  },
  {
    id: '13',
    name: 'Anushka Goyal',
    role: 'Membership Head',
    image: `${BASE}Anushka Goyal_MEMBERSHIP HEAD.jpg`,
  },
  {
    id: '14',
    name: 'Nikita',
    role: 'Membership Head',
    image: `${BASE}Nikita_Membership Head.jpg`,
  },
  {
    id: '15',
    name: 'Tanishka Sharma',
    role: 'Membership Head',
    image: `${BASE}Tanishka_Sharma_Membership_Head.jpg`,
  },
  {
    id: '16',
    name: 'Sanchita Yadav',
    role: 'Creative Head',
    image: `${BASE}Sanchita Yadav_Creative Head.jpg`,
  },
  {
    id: '17',
    name: 'Ria Saraswat',
    role: 'Creative Head',
    image: `${BASE}Ria_Saraswat_CreativeHead.png`,
  },
  {
    id: '18',
    name: 'Ekta Yadav',
    role: 'Media Head',
    image: `${BASE}EktaYadav_MediaHead.jpg`,
  },
  {
    id: '19',
    name: 'Tanisha Choudhary',
    role: 'Media Head',
    image: `${BASE}Tanisha Choudhary_Media Head.jpg`,
  },
  {
    id: '20',
    name: 'Hiti Panghal',
    role: 'PR Head',
    image: `${BASE}Hiti Panghal_PR Head.jpg`,
  },
  {
    id: '21',
    name: 'Mehak Taneja',
    role: 'PR Head',
    image: `${BASE}Mehak Taneja_PR Head.jpg`,
  },
  {
    id: '22',
    name: 'Vaishnavi Shukla',
    role: 'PR Head',
    image: `${BASE}VAISHNAVI SHUKLA_PR HEAD.jpg`,
  },
  {
    id: '23',
    name: 'Manya Gupta',
    role: 'HR Head',
    image: `${BASE}Manya Gupta_HR head.jpg`,
  },
  {
    id: '24',
    name: 'Unnati',
    role: 'HR Head',
    image: `${BASE}Unnati_HR Head.jpg`,
  },
  {
    id: '25',
    name: 'Arushi',
    role: 'Sponsorship Head',
    image: `${BASE}Arushi_Sponsorship_Head.png`,
  },
  {
    id: '26',
    name: 'Iti Goel',
    role: 'Sponsorship Head',
    image: `${BASE}Iti_Goel_Sponsorship_Head.jpg`,
  },
  {
    id: '27',
    name: 'Prisha',
    role: 'Content Head',
    image: `${BASE}Prisha_Content Head.jpg`,
  },
  {
    id: '28',
    name: 'Eti Jain',
    role: 'Content Head',
    image: `${BASE}Eti_Jain_Content Head.jpg`,
  },
];

// =========================================================
// REUSABLE CARDS
// =========================================================

function LeaderCard({ member }) {
  return (
      <ProfileCard
          cardType="leader"
          avatarUrl={member.image}
          name={member.name}
          title={member.role}
          theme={
            document.documentElement.classList.contains('dark')
                ? 'dark'
                : 'light'
          }
          enableTilt={true}
          tiltStrength={12}
          parallax={8}
          holo={0.5}
          glare={0.4}
          radius={16}
      />
  );
}

function HeadCard({ member }) {
  return (
      <ProfileCard
          cardType="head"
          avatarUrl={member.image}
          name={member.name}
          title={member.role}
          theme={
            document.documentElement.classList.contains('dark')
                ? 'dark'
                : 'light'
          }
          enableTilt={true}
          tiltStrength={12}
          parallax={8}
          holo={0.5}
          glare={0.4}
          radius={16}
      />
  );
}

// =========================================================
// MAIN PEOPLE COMPONENT
// =========================================================

export default function People() {
  const [visibleHeads, setVisibleHeads] = useState(10);

  const showMore = () => {
    setVisibleHeads((previous) =>
        Math.min(previous + 10, heads.length)
    );
  };

  return (
      <section
          id="team"
          className="overflow-hidden bg-[#E3EBF0] text-[#043473] dark:bg-[#28518A] dark:text-[#E4D076]"
      >
        <div className="mx-auto max-w-[1800px] px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28">

          {/* SECTION HEADER */}

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">

            <div className="lg:col-span-6">
              <h2 className="text-[clamp(2.75rem,6vw,5.5rem)] font-semibold leading-[0.88] tracking-[-0.075em]">

              <span className="block text-[#043473] dark:text-[#E4D076]">
                Good ideas need
              </span>

                <span className="block text-[#28518A] dark:text-[#D7D6AE]">
                good company.
              </span>

              </h2>
            </div>

            <div className="flex items-end lg:col-span-3 lg:pb-3">
              <div>

                <p
                    className="max-w-[290px] text-base leading-7 sm:text-lg sm:leading-8"
                    style={{ color: 'var(--fg-muted)' }}
                >
                  Meet the Senior Execom team making space for possibility — one
                  chapter at a time.
                </p>

                <p className="mt-3 text-xs font-bold tracking-[0.16em] text-[#28518A] dark:text-[#E4D076]">
                  2026–2027
                </p>

              </div>
            </div>

          </div>

          {/* LEADERSHIP */}

          <div className="mt-16 sm:mt-20">

            <div
                className="mb-6 flex items-center gap-3 border-t pt-6"
                style={{ borderColor: 'var(--border)' }}
            >

            <span
                className="h-px w-6"
                style={{ backgroundColor: 'var(--secondary)' }}
            />

              <p
                  className="text-[10px] font-semibold tracking-[0.2em]"
                  style={{ color: 'var(--fg-muted)' }}
              >
                LEADERSHIP
              </p>

            </div>

            <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-7">

              {leadership.map((member) => (
                  <LeaderCard key={member.id} member={member} />
              ))}

            </div>

          </div>

          {/* DEPARTMENT HEADS */}

          <div className="mt-20 sm:mt-24">

            <div
                className="mb-6 flex items-center gap-3 border-t pt-6"
                style={{ borderColor: 'var(--border)' }}
            >

            <span
                className="h-px w-6"
                style={{ backgroundColor: 'var(--secondary)' }}
            />

              <p
                  className="text-[10px] font-semibold tracking-[0.2em]"
                  style={{ color: 'var(--fg-muted)' }}
              >
                DEPARTMENT HEADS
              </p>

            </div>

            <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">

              {heads.slice(0, visibleHeads).map((member) => (
                  <HeadCard key={member.id} member={member} />
              ))}

            </div>

            {/* LOAD MORE */}

            {visibleHeads < heads.length && (

                <div className="mt-12 flex justify-center">

                  <button
                      onClick={showMore}
                      className="group rounded-full border border-[#043473] px-9 py-3 text-sm font-semibold tracking-wide text-[#043473] transition-all duration-300 hover:bg-[#043473] hover:text-white dark:border-[#E4D076] dark:text-[#E4D076] dark:hover:bg-[#E4D076] dark:hover:text-[#28518A]"
                  >
                    Load More

                    <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-y-1">
                  ↓
                </span>

                  </button>

                </div>

            )}

            {visibleHeads >= heads.length && (

                <div className="mt-10 flex justify-center">

                  <button
                      onClick={() => setVisibleHeads(10)}
                      className="rounded-full border border-[#043473] px-8 py-3 text-sm font-semibold text-[#043473] transition-all hover:bg-[#043473] hover:text-white dark:border-[#E4D076] dark:text-[#E4D076] dark:hover:bg-[#E4D076] dark:hover:text-[#28518A]"
                  >
                    Show Less ↑
                  </button>

                </div>

            )}

          </div>

          {/* BOTTOM CAPTION */}

          <div
              className="mt-16 flex flex-col justify-between gap-3 border-t pt-5 text-[10px] font-medium tracking-[0.15em] sm:mt-20 sm:flex-row sm:text-xs"
              style={{
                borderColor: 'var(--border)',
                color: 'var(--fg-muted)',
              }}
          >

            <p>
              THE PEOPLE BEHIND THE PROGRESS · 2026–2027
            </p>

          </div>

        </div>
      </section>
  );
}