# Import OSI Format

OSI files from other tools can be imported into Actian AI Analyst using **Steward**, the AI-powered semantic layer assistant.

!!! warning

    Direct import of OSI files is not supported because the OSI format lacks the detail Actian AI Analyst needs for a complete semantic model. Steward intelligently fills in the gaps.


### How to Import an OSI File

1. Open **Steward** from the right sidebar
2. Upload your OSI YAML file to the chat
3. Ask Steward to import the semantic model
4. Steward will:
    * Analyze the OSI file structure
    * Match datasets to your connected data sources
    * Infer missing metadata (types, relationships, etc.)
    * Create complete Actian AI Analyst models with proper configuration

### Example Prompt

> "Please import this OSI file and create models in my semantic layer. Map the datasets to my PostgreSQL data source."
