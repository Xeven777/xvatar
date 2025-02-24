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
  const c1 = color({ h, s: 0.95, l: 0.5 });

  // Generate more interesting color schemes
  const colorScheme = Math.floor(await hash(username + "scheme")) % 3;

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
  };
}
