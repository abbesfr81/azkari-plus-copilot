You are an expert technical lead who specializes in extracting development-relevant context from Product Requirements Documents (PRDs). I need you to analyze the following PRD and create a focused GEMINI.md file that will help AI coding assistants understand my project and generate better code.

**INSTRUCTIONS:**

- Extract ONLY information that directly impacts code development
- Focus on technical implementation details, not business justification
- Keep it concise but comprehensive for development context
- Prioritize current development phase information
- Include code patterns, standards, and architectural decisions

**MY PRD:**
file: ./prd-deeplinks-generator.md

**CURRENT DEVELOPMENT PHASE:**
Mvp stage.

Please generate a GEMINI.md file with the following structure:

## Required Sections:

### 1. PROJECT OVERVIEW

- Extract 2-3 sentences describing what we're building
- Focus on technical value proposition, not business case
- Include core functionality from a development perspective

### 2. ARCHITECTURE & TECH STACK

- Extract all technology choices from Technical Specifications
- Include frameworks, languages, databases, cloud services
- Add any architectural patterns mentioned
- Include third-party integrations and APIs

### 3. CODING STANDARDS & PREFERENCES

- Extract development guidelines from Non-Functional Requirements
- Include coding style, testing requirements, documentation standards
- Add performance requirements that affect code structure
- Include accessibility and browser compatibility needs

### 4. CORE BUSINESS RULES

- Extract only business logic that directly impacts code implementation
- Include user roles, permissions, and workflow rules
- Add data validation requirements and business constraints
- Focus on domain logic that affects application behavior

### 5. DATA MODELS & API STRUCTURE

- Extract key entities and relationships from Functional Requirements
- Include primary data structures needed
- Add API endpoints that will be developed
- Include data flow and integration points

### 6. FILE STRUCTURE & ORGANIZATION

- Suggest logical project structure based on requirements
- Include component organization and module breakdown
- Add testing structure and configuration files
- Consider the tech stack when organizing files

### 7. DEVELOPMENT PRIORITIES

- Extract current phase scope from Timeline & Milestones
- Focus on what's being built NOW vs future phases
- Include MVP vs enhanced feature distinctions
- Add any critical path dependencies

### 8. TECHNICAL CONSTRAINTS

- Extract limitations from Constraints & Assumptions section
- Include performance requirements, security constraints
- Add compliance requirements that affect implementation
- Include resource limitations that impact technical choices

**FILTERING GUIDELINES:**
❌ EXCLUDE these from GEMINI.md:

- Market research and competitive analysis
- Business justification and ROI calculations
- Stakeholder information and org charts
- Marketing copy and user acquisition strategies
- Budget and timeline details (except current development phase)
- User research findings (unless they affect UX implementation)

✅ INCLUDE these in GEMINI.md:

- Technical architecture and implementation details
- Code quality standards and development practices
- Business logic that affects application behavior
- Data models and API specifications
- Current development focus and priorities
- Technical constraints and performance requirements

**OUTPUT FORMAT:**
Structure the GEMINI.md as a markdown file with clear headings, code examples where relevant, and bullet points for easy scanning. Include TypeScript interfaces or similar code snippets if data models are specified in the PRD.
