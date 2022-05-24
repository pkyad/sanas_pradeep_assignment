-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Transmission" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "fileName" TEXT NOT NULL,
    "transcription" TEXT
);
INSERT INTO "new_Transmission" ("fileName", "id", "transcription") SELECT "fileName", "id", "transcription" FROM "Transmission";
DROP TABLE "Transmission";
ALTER TABLE "new_Transmission" RENAME TO "Transmission";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
