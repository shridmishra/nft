
### 1. Looked at the Figma design
- First thing I did was break down the layout and turn all the pixel values into Tailwind classes.
- Pulled out the fonts, colors, and spacing straight from the design.

### 2. Breaking it into components
- **DualColorText** – for all those little two-color labels so I could reuse them anywhere.
- **GameButton** – kinda fun, I clipped it into a polygon and then threw a line on top for that retro game vibe.
- **Grid** – honestly the trickiest part. I just kept positioning stuff and doing trial-and-error until it looked right.

### 3. Styling
- Fonts: `atomos`, `voltec`, `orbitron`.  
  - `atomos` wasn’t available, so I downloaded it and used it manually.
- Colors: set them up in `global.css`.
- Made a `bg-hero` class for the hero section background.

### 4. Responsiveness
- The design was desktop-first, but I made sure the HTML structure won’t break if we want to make it mobile later.

### Extra note
- I could’ve added wallet functionality, but didn’t because of the time limit.
- Built the whole thing in about 7 hours and had a lot of fun doing it.
