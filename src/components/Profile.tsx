import React from 'react';
import Image from 'next/image';
import { profile } from '../../data';

/**
 * Portrait + a ruled ledger of facts. No card, no circular avatar:
 * a portrait crop and hairlines, the way a magazine contributor block
 * is set.
 */
const Profile = () => {
  const rows = [
    { label: '名前', value: `${profile.name} / ${profile.nameLatin}` },
    { label: '職種', value: profile.role },
    { label: '拠点', value: profile.base },
    { label: '学歴', value: `${profile.education}（専攻: ${profile.major}）` },
    { label: '技術', value: profile.stack.join('、') },
    { label: '趣味', value: profile.interests.join('、') },
  ];

  return (
    <div className="grid gap-8 sm:grid-cols-[minmax(0,11rem)_minmax(0,1fr)] sm:gap-10">
      <figure className="m-0 max-w-[11rem]">
        <Image
          className="aspect-square w-full border border-border-default bg-canvas-subtle object-cover"
          alt={`${profile.name}のポートレート`}
          src="/images/profileIcon.jpg"
          width={352}
          height={352}
          priority
        />
        <figcaption className="label mt-2">{profile.name}</figcaption>
      </figure>

      <dl className="m-0">
        {rows.map(({ label, value }) => (
          <div key={label} className="rule grid grid-cols-[4.5rem_minmax(0,1fr)] gap-4 py-3">
            <dt className="label pt-[0.2rem]">{label}</dt>
            <dd className="m-0 text-sm leading-relaxed text-fg-default">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

export default Profile;
