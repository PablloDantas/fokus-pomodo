# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Fokus is a Pomodoro timer web application built with vanilla JavaScript (ES6 modules), HTML, and CSS. It implements three timer modes: focus (30 minutes), short break (5 minutes), and long break (15 minutes). The application features background music toggle and dynamic UI updates based on the selected mode.

## Architecture

The application follows a modular architecture with separation of concerns, using ES6 modules and class-based design patterns.

### Module Structure

**FokusApp** (`js/main.js`)
- Main application orchestrator that coordinates all modules
- Initializes and manages communication between Timer, AudioPlayer, and UIController
- Handles all business logic and event coordination
- Entry point: Instantiated on `DOMContentLoaded` event

**Timer** (`js/modules/timer.js`)
- Encapsulates all timer logic in a reusable class
- Manages countdown state using callbacks for tick and completion events
- Provides static `formatTime()` utility for consistent time formatting
- Supports start, pause, reset, and toggle operations
- Properly handles interval cleanup to prevent memory leaks

**AudioPlayer** (`js/modules/audio-player.js`)
- Manages background music playback
- Provides simple API: play(), pause(), toggle()
- Configurable loop and volume settings

**UIController** (`js/modules/ui-controller.js`)
- Centralizes all DOM manipulation and queries
- Caches DOM references in constructor for performance
- Provides high-level methods for UI updates (context, timer display, buttons)
- Manages event listener registration with callback pattern
- Handles active state toggling and dynamic content updates

**State Configuration** (`js/data/app-state.js`)
- Centralized configuration object for all app contexts
- Exports `APP_CONTEXTS` constants and `stateConfig` object
- Each context defines: title, strong (subtitle), totalTime (milliseconds)

### File Structure

```
├── index.html          # Main HTML structure, loads main.js as ES6 module
├── js/
│   ├── main.js        # Application orchestrator (FokusApp class)
│   ├── data/
│   │   └── app-state.js    # State configuration and constants
│   └── modules/
│       ├── timer.js        # Timer logic (Timer class)
│       ├── audio-player.js # Audio control (AudioPlayer class)
│       └── ui-controller.js # DOM manipulation (UIController class)
├── style/
│   └── styles.css     # CSS with context-based theming via [data-contexto]
├── imagens/           # Images for different contexts (foco.png, short.png, long.png)
└── sons/              # Audio files
```

### Data Flow

1. User interaction triggers event in UIController
2. UIController executes registered callback passing relevant data
3. FokusApp handles the event, coordinating between modules
4. FokusApp updates Timer/AudioPlayer state as needed
5. Modules execute callbacks to notify FokusApp of state changes
6. FokusApp instructs UIController to update the display

### Styling System

CSS uses CSS custom properties with context-based theming:
- `[data-contexto="foco"]` - Purple gradient background
- `[data-contexto="short"]` - Green gradient background
- `[data-contexto="long"]` - Blue gradient background

Responsive breakpoints:
- Mobile: max-width 767px
- Tablet: 768px-1024px

## Development Notes

- Uses ES6 modules - requires `type="module"` in script tag
- No build process or transpilation required
- Must be served via HTTP server for modules to work (not `file://`)
- For local development: `python -m http.server` or Live Server extension
- All modules use import/export syntax
- Classes follow single responsibility principle