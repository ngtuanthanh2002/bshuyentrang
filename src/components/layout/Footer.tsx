import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const footerLinks = [
  { href: "#van-de", label: "Vấn đề" },
  { href: "#quy-trinh", label: "Quy trình" },
  { href: "#benh-nhan", label: "Bệnh nhân" },
  { href: "#faq", label: "FAQ" },
  { href: "#dang-ky", label: "Đặt lịch" },
];

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container-main py-12 lg:py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <Image src="/images/doctor-logo.svg" alt="" width={36} height={36} className="h-9 w-9 shrink-0" />
              <span className="text-base font-bold text-white">BS. Trần Huyền Trang</span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400">{siteConfig.description}</p>
            <a href="#dang-ky" className="mt-5 inline-flex cursor-pointer items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-primary-dark">
              Đặt lịch tư vấn miễn phí
            </a>
          </div>
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white">Liên kết</h3>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="cursor-pointer text-sm text-slate-400 transition-colors hover:text-white">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white">Liên hệ</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href={`tel:${siteConfig.phone}`} className="cursor-pointer font-medium text-white hover:text-primary-light">{siteConfig.phoneDisplay}</a></li>
              <li><a href={`mailto:${siteConfig.email}`} className="cursor-pointer hover:text-white">{siteConfig.email}</a></li>
              <li>{siteConfig.address}</li>
              <li>{siteConfig.hours}</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-slate-500">© {new Date().getFullYear()} ABClinic – BS. Trần Huyền Trang · {siteConfig.addressFull}</p>
          <p className="text-xs text-slate-600">Chuyên sâu Tĩnh mạch & Tim mạch</p>
        </div>
      </div>
    </footer>
  );
}
