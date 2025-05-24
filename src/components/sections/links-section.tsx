import { socialLinks } from "@/lib/content/social-links";

const paragraphs = [
  "I'm a full-stack developer and designer from Italy. I enjoy building open-source projects using technologies like Next.js and React.",
  "I'm passionate about learning, creating, and designing digital products. I'm currently an high school student, and I'm always looking for new challenges and opportunities to grow my skills and knowledge.",
];

const SocialLinksList = () => (
  <div className="flex space-x-4">
    {socialLinks.map((link) => (
      <a
        key={link.id}
        target="_blank"
        href={link.href}
        rel="noopener noreferrer"
        className="underline underline-offset-4"
      >
        [{link.name}]
      </a>
    ))}
  </div>
);

export const SocialLinksSection = () => {
  return (
    <section className="mb-6 space-y-6 leading-snug">
      <p>{paragraphs[0]}</p>
      <p>{paragraphs[1]}</p>
      <SocialLinksList />
    </section>
  );
};
