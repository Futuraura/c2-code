import { defineRelations, sql } from "drizzle-orm";
import {
  boolean,
  integer,
  index,
  jsonb,
  pgEnum,
  pgTable,
  text,
  timestamp,
  unique,
} from "drizzle-orm/pg-core";

export const taskType = pgEnum("task_type", [
  "code",
  "quiz",
  "project",
  "debugging",
  "theory",
]);

export const languages = pgTable("languages", {
  id: text("id")
    .primaryKey()
    .default(sql`uuidv7()`),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  skillTree: jsonb("skill_tree").notNull(),
});

export const user = pgTable("users", {
  id: text("id")
    .primaryKey()
    .default(sql`uuidv7()`),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: boolean("email_verified").default(false).notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .$onUpdate(() => new Date())
    .notNull()
    .defaultNow(),
  role: text("role"),
  banned: boolean("banned").default(false),
  banReason: text("ban_reason"),
  banExpires: timestamp("ban_expires"),
});

export const userLanguages = pgTable(
  "user_languages",
  {
    id: text("id")
      .primaryKey()
      .default(sql`uuidv7()`),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    languageId: text("language_id")
      .notNull()
      .references(() => languages.id, { onDelete: "cascade" }),
    skills: jsonb("skills").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (table) => [unique().on(table.userId, table.languageId)],
);

export const courses = pgTable("courses", {
  id: text("id")
    .primaryKey()
    .default(sql`uuidv7()`),
  ownerId: text("owner_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  languageId: text("language_id")
    .notNull()
    .references(() => languages.id, { onDelete: "cascade" }),
  title: text("title").notNull(),
  description: text("description").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
});

export const courseModules = pgTable("course_modules", {
  id: text("id")
    .primaryKey()
    .default(sql`uuidv7()`),
  courseId: text("course_id")
    .notNull()
    .references(() => courses.id, { onDelete: "cascade" }),
  title: text("title").notNull(),
  description: text("description").notNull(),
  skillPath: text("skill_path").notNull(),
  position: integer("position").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
});

export const lessons = pgTable("lessons", {
  id: text("id")
    .primaryKey()
    .default(sql`uuidv7()`),
  moduleId: text("module_id")
    .notNull()
    .references(() => courseModules.id, { onDelete: "cascade" }),
  title: text("title").notNull(),
  description: text("description").notNull(),
  content: text("content").notNull(),
  skillPath: text("skill_path").notNull(),
  position: integer("position").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
});

export const tasks = pgTable("tasks", {
  id: text("id")
    .primaryKey()
    .default(sql`uuidv7()`),
  lessonId: text("lesson_id")
    .notNull()
    .references(() => lessons.id, { onDelete: "cascade" }),
  title: text("title").notNull(),
  description: text("description").notNull(),
  type: taskType("type").notNull(),
  position: integer("position").notNull(),
  starterCode: text("starter_code"),
  tests: jsonb("tests").notNull(),
  completed: boolean("completed").notNull().default(false),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
});

export const session = pgTable(
  "session",
  {
    id: text("id")
      .primaryKey()
      .default(sql`uuidv7()`),
    expiresAt: timestamp("expires_at").notNull(),
    token: text("token").notNull().unique(),
    createdAt: timestamp("created_at").notNull(),
    updatedAt: timestamp("updated_at")
      .$onUpdate(() => new Date())
      .notNull(),
    ipAddress: text("ip_address"),
    userAgent: text("user_agent"),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    impersonatedBy: text("impersonated_by"),
  },
  (table) => [index("session_userId_idx").on(table.userId)],
);

export const account = pgTable(
  "account",
  {
    id: text("id")
      .primaryKey()
      .default(sql`uuidv7()`),
    accountId: text("account_id").notNull(),
    providerId: text("provider_id").notNull(),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    accessToken: text("access_token"),
    refreshToken: text("refresh_token"),
    idToken: text("id_token"),
    accessTokenExpiresAt: timestamp("access_token_expires_at"),
    refreshTokenExpiresAt: timestamp("refresh_token_expires_at"),
    scope: text("scope"),
    password: text("password"),
    createdAt: timestamp("created_at").notNull(),
    updatedAt: timestamp("updated_at")
      .$onUpdate(() => new Date())
      .notNull(),
  },
  (table) => [index("account_userId_idx").on(table.userId)],
);

export const verification = pgTable(
  "verification",
  {
    id: text("id")
      .primaryKey()
      .default(sql`uuidv7()`),
    identifier: text("identifier").notNull(),
    value: text("value").notNull(),
    expiresAt: timestamp("expires_at").notNull(),
    createdAt: timestamp("created_at").notNull(),
    updatedAt: timestamp("updated_at")
      .$onUpdate(() => new Date())
      .notNull(),
  },
  (table) => [index("verification_identifier_idx").on(table.identifier)],
);

export const relations = defineRelations(
  {
    user,
    session,
    account,
    languages,
    userLanguages,
    courses,
    courseModules,
    lessons,
    tasks,
  },
  (r) => ({
    user: {
      languages: r.many.userLanguages({
        from: r.user.id,
        to: r.userLanguages.userId,
      }),
      courses: r.many.courses({
        from: r.user.id,
        to: r.courses.ownerId,
      }),
      sessions: r.many.session({
        from: r.user.id,
        to: r.session.userId,
      }),
      accounts: r.many.account({
        from: r.user.id,
        to: r.account.userId,
      }),
    },
    languages: {
      userLanguages: r.many.userLanguages({
        from: r.languages.id,
        to: r.userLanguages.languageId,
      }),
      courses: r.many.courses({
        from: r.languages.id,
        to: r.courses.languageId,
      }),
    },
    userLanguages: {
      user: r.one.user({
        from: r.userLanguages.userId,
        to: r.user.id,
      }),
      language: r.one.languages({
        from: r.userLanguages.languageId,
        to: r.languages.id,
      }),
    },
    courses: {
      owner: r.one.user({
        from: r.courses.ownerId,
        to: r.user.id,
      }),
      language: r.one.languages({
        from: r.courses.languageId,
        to: r.languages.id,
      }),
      modules: r.many.courseModules({
        from: r.courses.id,
        to: r.courseModules.courseId,
      }),
    },
    courseModules: {
      course: r.one.courses({
        from: r.courseModules.courseId,
        to: r.courses.id,
      }),
      lessons: r.many.lessons({
        from: r.courseModules.id,
        to: r.lessons.moduleId,
      }),
    },
    lessons: {
      module: r.one.courseModules({
        from: r.lessons.moduleId,
        to: r.courseModules.id,
      }),
      tasks: r.many.tasks({
        from: r.lessons.id,
        to: r.tasks.lessonId,
      }),
    },
    tasks: {
      lesson: r.one.lessons({
        from: r.tasks.lessonId,
        to: r.lessons.id,
      }),
    },
    session: {
      user: r.one.user({
        from: r.session.userId,
        to: r.user.id,
      }),
    },
    account: {
      user: r.one.user({
        from: r.account.userId,
        to: r.user.id,
      }),
    },
  }),
);
