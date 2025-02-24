import color from "tinycolor2";

async function hash(str: string): Promise<number> {
  const buffer = await crypto.subtle.digest(
    "SHA-1",
    new TextEncoder().encode(str)
  );
  let hashValue = 0;
  const view = new DataView(buffer);
  for (let i = 0; i < view.byteLength; i += 4) {
    hashValue ^= view.getInt32(i);
  }
  return Math.abs(hashValue);
}

async function hue(str: string): Promise<number> {
  const n = await hash(str);
  return n % 360;
}

export async function generateGradient(username: string) {
  const h1 = await hue(username);
  const s1 = 0.96;
  const l1 = 0.5 + ((await hash(username + "lightness")) % 20) / 100;

  const c1 = color({ h: h1, s: s1, l: l1 });

  const h2Offset = ((await hash(username + "hue2")) % 180) + 90;
  const h2 = (h1 + h2Offset) % 360;
  const s2 = 0.8 + ((await hash(username)) % 20) / 100;
  const l2 = 0.5 + ((await hash(username + "lightness2")) % 30) / 100;

  const c2 = color({ h: h2, s: s2, l: l2 });

  const gradientRotation = (await hash(username)) % 360;
  const isRadial = (await hash(username + "radial")) % 2 === 0;

  return {
    fromColor: c1.toHexString(),
    toColor: c2.toHexString(),
    rotation: gradientRotation,
    isRadial: isRadial,
  };
}
