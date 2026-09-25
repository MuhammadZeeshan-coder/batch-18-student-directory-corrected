import {
  ExternalLink,
  Github,
  Globe,
  Linkedin,
  MessageCircle,
} from "lucide-react";

export default function StudentCard({ student }) {
  return (
    <article className="student-card">
      <div className="avatar-wrap">
        <img
          src={student.image || "/students/default-avatar.svg"}
          alt={`${student.name} profile`}
          className="avatar"
          onError={(e) => {
            e.currentTarget.src = "/students/default-avatar.svg";
          }}
        />
      </div>

      <div className="student-info">
        <h2>{student.name}</h2>
      </div>

      <div className="student-links">
        <SocialLink
          href={student.linkedin}
          label="LinkedIn"
          icon={<Linkedin size={17} />}
        />
        <SocialLink
          href={student.github}
          label="GitHub"
          icon={<Github size={17} />}
        />
        <SocialLink
          href={student.portfolio}
          label="Portfolio"
          icon={<Globe size={17} />}
        />
        <SocialLink
          href={student.whatsapp}
          label="Business WhatsApp"
          icon={<MessageCircle size={17} />}
        />
      </div>
    </article>
  );
}

function SocialLink({ href, label, icon }) {
  return (
    <a href={href || "#"} target="_blank" rel="noreferrer">
      {icon}
      <span>{label}</span>
      <ExternalLink size={13} />
    </a>
  );
}