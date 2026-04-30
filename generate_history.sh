#!/bin/bash

# Initialize git
git init
git remote add origin https://github.com/Vansh0204/Portfolio-2.0

# Helper function for backdated commits
commit_at() {
    local date="$1"
    local message="$2"
    GIT_AUTHOR_DATE="$date" GIT_COMMITTER_DATE="$date" git commit -m "$message"
}

# April 23: Initial Setup
git add package.json vite.config.js .gitignore
commit_at "2026-04-23T10:00:00" "feat: initial project setup with vite and react"

# April 24: Character Controller
git add src/App.jsx src/components/PixelCharacter.jsx
commit_at "2026-04-24T14:30:00" "feat: implement 2D ghost character and basic movement"

# April 25: Navigation & Rooms
git add src/components/GameEngine.jsx src/components/AboutRoom.jsx
commit_at "2026-04-25T11:15:00" "feat: add room transition logic and about room"

# April 26: CRT & Scanlines
git add src/index.css
commit_at "2026-04-26T16:45:00" "feat: implement CRT frame, scanline overlays and glow effects"

# April 27: Arcade Projects
git add src/components/ProjectsRoom.jsx src/hotspots.js
commit_at "2026-04-27T09:20:00" "feat: project room with interactive arcade cabinets and metadata"

# April 28: Skills & Open Source
git add src/components/SkillsRoom.jsx src/components/OpenSourceRoom.jsx
commit_at "2026-04-28T13:10:00" "feat: add skills room and open source PR tracker"

# April 29: Theme System
# (Committing changes to GameEngine/App/HUD for themes)
git add src/components/GameHUD.jsx src/AudioEngine.js
commit_at "2026-04-29T15:40:00" "feat: multi-theme system (GB, Cyberpunk, Amber) and audio engine"

# April 30: Final Polish
git add .
commit_at "2026-04-30T21:00:00" "style: theme-aware nebula backgrounds, resume integration, and performance polish"

echo "Commit history generated successfully!"
