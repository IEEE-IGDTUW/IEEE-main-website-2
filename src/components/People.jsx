// People.jsx — IEEE IGDTUW Senior Execom 2026–2027

import ProfileCard from './ProfileCard';

const BASE = `${import.meta.env.BASE_URL}IEEE Senior Execomm 2026-2027/`;

// ─── Team data ───────────────────────────────────────────────────────────────
// Leadership cluster is shown first and larger; the rest in a uniform grid.
const leadership = [
  // Chairpersons
  {
    id: '01',
    name: 'Himani Gupta',
    role: 'IEEE Chairperson',
    image: `${BASE}HimaniGupta_IEEEChairperson.png`,
    heicFallback: false,
    initials: 'HG',
  },
  {
    id: '04',
    name: 'Anushree Jain',
    role: 'WIE Chairperson',
    image: `${BASE}Anushree Jain_WIE_Chairperson.jpeg`,
    heicFallback: false,
    initials: 'AJ',
  },

  // Vice-Chairpersons
  {
    id: '02',
    name: 'Gunjan Aggarwal',
    role: 'IEEE Vice-Chairperson',
    image: `${BASE}Gunjan Aggarwal_IEEE Vice-chairperson.JPG`,
    heicFallback: false,
    initials: 'GA',
  },
  {
    id: '05',
    name: 'Sneha Yadav',
    role: 'WIE Vice-Chairperson',
    image: `${BASE}Sneha Yadav _WIE Vice Chairperson_.jpg`,
    heicFallback: false,
    initials: 'SY',
  },

  // General Secretaries
  {
    id: '03',
    name: 'Jessica Malik',
    role: 'IEEE General Secretary',
    image: `${BASE}Jessica Malik_IEEE GenSec.jpg`,
    heicFallback: false,
    initials: 'JM',
  },
  {
    id: '06',
    name: 'Muskan Goel',
    role: 'WIE General Secretary',
    image: `${BASE}Muskan Goel_WIE GenSec.png`,
    heicFallback: false,
    initials: 'MG',
  },

  // Treasurer
  {
    id: '07',
    name: 'Saanvi Singh',
    role: 'Treasurer',
    image: `${BASE}Saanvi_Singh_Treasurer.jpg`,
    heicFallback: false,
    initials: 'SS',
  },
];

const heads = [
  // Event Management Heads
  {
    id: '08',
    name: 'Aakanksha Jha',
    role: 'Event Management Head',
    image: `${BASE}Aakanksha Jha _ EM Head.jpeg`,
    heicFallback: false,
    initials: 'AJ',
  },
  {
    id: '09',
    name: 'Eshita Nagaria',
    role: 'Event Management Head',
    image: `${BASE}EshitaNagaria_EMHead.jpg`,
    heicFallback: false,
    initials: 'EN',
  },
  {
    id: '10',
    name: 'Likhila Vydana',
    role: 'Event Management Head',
    image: `${BASE}LikhilaVydana_EMHead.jpg`,
    heicFallback: false,
    initials: 'LV',
  },
  // Technical Heads
  {
    id: '11',
    name: 'Aashi Garg',
    role: 'Technical Head',
    image: `${BASE}Aashi Garg_Tech Head.jpg`,
    heicFallback: false,
    initials: 'AG',
  },
  {
    id: '12',
    name: 'Parvati',
    role: 'Technical Head',
    image: `${BASE}PARVATI_TECH HEAD.png`,
    heicFallback: false,
    initials: 'P',
  },
  // Membership Heads
  {
    id: '13',
    name: 'Anushka Goyal',
    role: 'Membership Head',
    image: `${BASE}Anushka Goyal_MEMBERSHIP HEAD.jpg`,
    heicFallback: false,
    initials: 'AG',
  },
  {
    id: '14',
    name: 'Nikita',
    role: 'Membership Head',
    image: `${BASE}Nikita_Membership Head.jpg`,
    heicFallback: false,
    initials: 'N',
  },
  {
    id: '15',
    name: 'Tanishka Sharma',
    role: 'Membership Head',
    image: `${BASE}Tanishka_Sharma_Membership_Head.jpg`,
    heicFallback: false,
    initials: 'TS',
  },
  // Creative Heads
  {
    id: '16',
    name: 'Sanchita Yadav',
    role: 'Creative Head',
    image: `${BASE}Sanchita Yadav_Creative Head.jpg`,
    heicFallback: false,
    initials: 'SY',
  },
  {
    id: '17',
    name: 'Ria Saraswat',
    role: 'Creative Head',
    image: `${BASE}Ria_Saraswat_CreativeHead.png`,
    heicFallback: false,
    initials: 'RS',
  },
  // Media Heads
  {
    id: '18',
    name: 'Ekta Yadav',
    role: 'Media Head',
    image: `${BASE}EktaYadav_MediaHead.jpg`,
    heicFallback: false,
    initials: 'EY',
  },
  {
    id: '19',
    name: 'Tanisha Choudhary',
    role: 'Media Head',
    image: `${BASE}Tanisha Choudhary_Media Head.jpg`,
    heicFallback: false,
    initials: 'TC',
  },
  // PR Heads
  {
    id: '20',
    name: 'Hiti Panghal',
    role: 'PR Head',
    image: `${BASE}Hiti Panghal_PR Head.jpg`,
    heicFallback: false,
    initials: 'HP',
  },
  {
    id: '21',
    name: 'Mehak Taneja',
    role: 'PR Head',
    image: `${BASE}Mehak Taneja_PR Head.jpg`,
    heicFallback: false,
    initials: 'MT',
  },
  {
    id: '22',
    name: 'Vaishnavi Shukla',
    role: 'PR Head',
    image: `${BASE}VAISHNAVI SHUKLA_PR HEAD.jpg`,
    heicFallback: false,
    initials: 'VS',
  },
  // HR Heads
  {
    id: '23',
    name: 'Manya Gupta',
    role: 'HR Head',
    image: `${BASE}Manya Gupta_HR head.jpg`,
    heicFallback: false,
    initials: 'MG',
  },
  {
    id: '24',
    name: 'Unnati',
    role: 'HR Head',
    image: `${BASE}Unnati_HR Head.jpg`,
    heicFallback: false,
    initials: 'U',
  },
  // Sponsorship Heads
  {
    id: '25',
    name: 'Arushi',
    role: 'Sponsorship Head',
    image: `${BASE}Arushi_Sponsorship_Head.png`,
    heicFallback: false,
    initials: 'A',
  },
  {
    id: '26',
    name: 'Iti Goel',
    role: 'Sponsorship Head',
    image: `${BASE}Iti_Goel_Sponsorship_Head.jpg`,
    heicFallback: false,
    initials: 'IJ',
  },
  // Content Heads
  {
    id: '27',
    name: 'Prisha',
    role: 'Content Head',
    image: `${BASE}Prisha_Content Head.jpg`,
    heicFallback: false,
    initials: 'P',
  },
  {
    id: '28',
    name: 'Eti Jain',
    role: 'Content Head',
    image: `${BASE}Eti_Jain_Content Head.jpg`,
    heicFallback: false,
    initials: 'EJ',
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function InitialsAvatar({ initials, large = false }) {
  return (
    <div
      className={`flex h-full w-full items-center justify-center ${large ? 'text-4xl' : 'text-2xl'} font-black tracking-tight`}
      style={{
        background:
          'linear-gradient(135deg, var(--palette-queen-blue) 0%, var(--palette-konjo) 100%)',
        color: 'var(--palette-papaya)',
      }}
    >
      {initials}
    </div>
  );
}

function LeaderCard({ member }) {
  return (
      <ProfileCard
          avatarUrl={member.image}
          name={member.name}
          title={member.role}
          theme={document.documentElement.classList.contains('dark') ? 'dark' : 'light'}
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
          avatarUrl={member.image}
          name={member.name}
          title={member.role}
          theme={document.documentElement.classList.contains('dark') ? 'dark' : 'light'}
          enableTilt={true}
          tiltStrength={12}
          parallax={8}
          holo={0.5}
          glare={0.4}
          radius={16}
      />
  );
}

// ─── Main section ─────────────────────────────────────────────────────────────

export default function People() {
  return (
    <section
      id="team"
      className="overflow-hidden bg-[#E3EBF0] text-[#043473] dark:bg-[#28518A] dark:text-[#E4D076]"
    >
      <div className="mx-auto max-w-[1800px] px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28">

        {/* ── Section header ── */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">



          {/* Main heading */}
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

          {/* Description */}
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

        {/* ── Leadership grid (3/4 portrait aspect) ── */}
        <div className="mt-16 sm:mt-20">
          <div
            className="mb-6 flex items-center gap-3 border-t pt-6"
            style={{ borderColor: 'var(--border)' }}
          >
            <span
              className="h-px w-6"
              style={{ backgroundColor: 'var(--secondary)' }}
            />
            <p className="text-[10px] font-semibold tracking-[0.2em]" style={{ color: 'var(--fg-muted)' }}>
              LEADERSHIP
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-7">
            {leadership.map((member) => (
              <LeaderCard key={member.id} member={member} />
            ))}
          </div>
        </div>

        {/* ── Department heads grid (square aspect) ── */}
        <div className="mt-20 sm:mt-24">
          <div
            className="mb-6 flex items-center gap-3 border-t pt-6"
            style={{ borderColor: 'var(--border)' }}
          >
            <span
              className="h-px w-6"
              style={{ backgroundColor: 'var(--secondary)' }}
            />
            <p className="text-[10px] font-semibold tracking-[0.2em]" style={{ color: 'var(--fg-muted)' }}>
              DEPARTMENT HEADS
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7">
            {heads.map((member) => (
              <HeadCard key={member.id} member={member} />
            ))}
          </div>
        </div>

        {/* ── Bottom caption ── */}
        <div
          className="mt-16 flex flex-col justify-between gap-3 border-t pt-5 text-[10px] font-medium tracking-[0.15em] sm:mt-20 sm:flex-row sm:text-xs"
          style={{
            borderColor: 'var(--border)',
            color: 'var(--fg-muted)',
          }}
        >

          <p>THE PEOPLE BEHIND THE PROGRESS · 2026–2027</p>
        </div>

      </div>
    </section>
  );
}