import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgba(var(--eds_primary), <alpha-value>)",
        "primary-resting": "rgba(var(--eds_primary_resting), <alpha-value>)",
        "primary-hover": "rgba(var(--eds_primary_hover), <alpha-value>)",
        "primary-hover-alt":
          "rgba(var(--eds_primary_hover_alt), <alpha-value>)",
        "primary-selected-highlight":
          "rgba(var(--eds_primary_selected_highlight), <alpha-value>)",
        "text-default": "rgba(var(--eds_text_default), <alpha-value>)",
        "text-secondary": "rgba(var(--eds_text_secondary), <alpha-value>)",
        "text-tertiary": "rgba(var(--eds_text_tertiary), <alpha-value>)",
        "text-warning": "rgba(var(--eds_warning_text), <alpha-value>)",
        "text-danger": "rgba(var(--eds_danger_text), <alpha-value>)",
        "text-success": "rgba(var(--eds_success_text), <alpha-value>)",
        "text-white": "rgba(var(--eds_text_primary_white), <alpha-value>)",
        "background-medium":
          "rgba(var(--eds_background_medium), <alpha-value>)",
        "background-light": "rgba(var(--eds_background_light), <alpha-value>)",
        "background-info": "rgba(var(--eds_background_info), <alpha-value>)",
        "background-default":
          "rgba(var(--eds_background_default), <alpha-value>)",
        "background-warning":
          "rgba(var(--eds_background_warning), <alpha-value>)",
        "background-danger":
          "rgba(var(--eds_background_danger), <alpha-value>)",
        "background-success":
          "rgba(var(--eds_background_success), <alpha-value>)",
        "background-sticky": "var(--eds_background_sticky)",
        "feedback-warning-resting":
          "rgba(var(--eds_feedback_warning_resting), <alpha-value>)",
        "infographic-primary-moss-green-21":
          "rgba(var(--eds_infographic_primary_moss_green_21), <alpha-value>)",
        "table-interactive-header-activeted":
          "var(--eds_interactive_table__header__fill_activated)",
      },
      spacing: {
        "xxx-large": "var(--eds_spacing_xxx_large)",
        "xx-large": "var(--eds_spacing_xx_large)",
        "x-large": "var(--eds_spacing_x_large)",
        large: "var(--eds_spacing_large)",
        medium: "var(--eds_spacing_medium)",
        "medium-small": "var(--eds_spacing_medium_small)",
        small: "var(--eds_spacing_small)",
        "x-small": "var(--eds_spacing_x_small)",
        "xx-small": "var(--eds_spacing_xx_small)",
      },
      keyframes: {
				overlayShow: {
					from: { opacity: '0' },
					to: { opacity: '1' },
				},
				contentShow: {
					from: { opacity: '0', transform: 'translate(-50%, -48%) scale(0.96)' },
					to: { opacity: '1', transform: 'translate(-50%, -50%) scale(1)' },
				},
			},
			animation: {
				overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
				contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
			},
      boxShadow: {
				tile: '0px 4px 16px 0px rgba(0, 0, 0, 0.13), 0px 3px 8px 0px rgba(0, 0, 0, 0.06)',
				tempnav:
					'0px 12px 17px 0px var(--Shadow-Shadow-14, rgba(0, 0, 0, 0.14)), 0px 5px 22px 0px var(--Shadow-Shadow-12, rgba(0, 0, 0, 0.12)), 0px 7px 8px 0px var(--Shadow-Shadow-20, rgba(0, 0, 0, 0.20));',
			},
    },
  },
  plugins: [],
} satisfies Config;
