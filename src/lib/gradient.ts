import color from "tinycolor2";

async function hash(str: string): Promise<number> {
  let sum = 0;
  const buffer = await crypto.subtle.digest(
    "SHA-1",
    new TextEncoder().encode(str)
  );
  for (const n of new Uint8Array(buffer)) {
    sum += n;
  }
  return sum;
}

async function hue(str: string): Promise<number> {
  const n = await hash(str);
  return n % 360;
}

export async function generateGradient(username: string) {
  const h = await hue(username);
  const s = 0.98;
  const l = 0.5;
  const c1 = color({ h, s, l });

  const colorScheme = Math.floor(await hash(username + "scheme")) % 3;
  const gradientRotation = Math.floor(await hash(username + "rotation")) % 360; // Add rotation
  const isRadial = (await hash(username + "radial")) % 2 === 0; // Determine radial or linear

  let second;

  switch (colorScheme) {
    case 0:
      // Complementary
      second = c1.complement().toHexString();
      break;
    case 1:
      // Triad
      second = c1.triad()[1].toHexString();
      break;
    case 2:
      // Analogous
      second = c1.analogous(3)[2].toHexString();
      break;
    default:
      second = c1.triad()[1].toHexString();
  }

  return {
    fromColor: c1.toHexString(),
    toColor: second,
    rotation: gradientRotation, // Pass rotation
    isRadial: isRadial, // Pass radial flag
  };
}
