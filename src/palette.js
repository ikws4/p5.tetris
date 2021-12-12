class Base {
  // prettier-ignore
  constructor() {
    this.base               = "#191724";
    this.surface            = "#1f1d2e";
    this.overlay            = "#26233a";
    this.inactive           = "#555169";
    this.subtle             = "#6e6a86";
    this.text               = "#e0def4";
    this.love               = "#eb6f92";
    this.gold               = "#f6c177";
    this.rose               = "#ebbcba";
    this.pine               = "#31748f";
    this.foam               = "#9ccfd8";
    this.iris               = "#c4a7e7";
    this.highlight          = "#2a2837";
    this.highlight_inactive = "#211f2d";
    this.highlight_overlay  = "#3a384a";
  }
}

class Moon {
  // prettier-ignore
  constructor() {
    this.base               = "#232136";
    this.surface            = "#2a273f";
    this.overlay            = "#393552";
    this.inactive           = "#59546d";
    this.subtle             = "#817c9c";
    this.text               = "#e0def4";
    this.love               = "#eb6f92";
    this.gold               = "#f6c177";
    this.rose               = "#ea9a97";
    this.pine               = "#3e8fb0";
    this.foam               = "#9ccfd8";
    this.iris               = "#c4a7e7";
    this.highlight          = "#312f44";
    this.highlight_inactive = "#2a283d";
    this.highlight_overlay  = "#3f3c53";
  }
}

class Dawn {
  // prettier-ignore
  constructor() {
    this.base               = "#faf4ed";
    this.surface            = "#fffaf3";
    this.overlay            = "#f2e9de";
    this.inactive           = "#9893a5";
    this.subtle             = "#6e6a86";
    this.text               = "#575279";
    this.love               = "#b4637a";
    this.gold               = "#ea9d34";
    this.rose               = "#d7827e";
    this.pine               = "#286983";
    this.foam               = "#56949f";
    this.iris               = "#907aa9";
    this.highlight          = "#eee9e6";
    this.highlight_inactive = "#f2ede9";
    this.highlight_overlay  = "#e4dfde";
  }
}

class Palette {
  constructor(variant) {
    let p = null;

    if (variant === "base") {
      p = new Base();
    } else if (variant === "moon") {
      p = new Moon();
    } else if (variant === "dawn") {
      p = new Dawn();
    } else {
      throw new Error(
        "Unsupported variant, currently only support ['base', 'moon', 'dawn']"
      );
    }

    this.base = p.base;
    this.surface = p.surface;
    this.overlay = p.overlay;
    this.inactive = p.inactive;
    this.subtle = p.subtle;
    this.text = p.text;
    this.love = p.love;
    this.gold = p.gold;
    this.rose = p.rose;
    this.pine = p.pine;
    this.foam = p.foam;
    this.iris = p.iris;
    this.highlight = p.highlight;
    this.highlight_inactive = p.highlight_inactive;
    this.highlight_overlay = p.highlight_overlay;
  }
}
