const DEMO_USER = {
  id: "demo-user-001",
  username: "antara_demo",
  created_at: "2026-09-07T00:00:00.000Z",
};

const INCIDENT_KEY = "antara_demo_incidents";
const DOCUMENT_KEY = "antara_demo_documents";
const GUARDIAN_KEY = "antara_demo_guardian";
const DEMO_CASE_KEY = "antara_demo_case_seeded";

const DEMO_INCIDENTS = [
  {
    incident_id: "incident-anita-001",
    user_id: DEMO_USER.id,
    description:
      "During an argument at home, Arjun grabbed Anita by the arm and pushed her against the bedroom door. Meena was present and told Anita not to involve anyone outside the family.",
    date: "2026-06-02",
    time: "21:35",
    location: "Home",
    people_involved: [
      { role: "husband", name: "Arjun" },
      { role: "mother-in-law", name: "Meena" },
    ],
    categories: {
      physical: true,
      economic: false,
      digital: false,
    },
    economic_details: {
      money_controlled: false,
      card_withheld: false,
      amount: null,
    },
    digital_details: {
      platform: null,
      private_content_threat: false,
    },
    evidence: [
      {
        evidence_id: "evidence-001-photo",
        type: "photo",
        filename: "arm_injury_photo.jpg",
        description: "Demo photo documenting visible injury.",
        captured_at: "2026-06-02T22:04:00+05:30",
      },
      {
        evidence_id: "evidence-001-sms",
        type: "sms",
        filename: "threatening_sms_01.txt",
        description: "Demo SMS exchange following the incident.",
        captured_at: "2026-06-02T22:18:00+05:30",
      },
    ],
    created_at: "2026-06-02T22:04:00+05:30",
  },

  {
    incident_id: "incident-anita-002",
    user_id: DEMO_USER.id,
    description:
      "Arjun demanded access to Anita's bank account and transferred money from the account without her consent. He told her that her salary was family money and that she was not allowed to question the transaction.",
    date: "2026-06-11",
    time: "18:20",
    location: "Home",
    people_involved: [{ role: "husband", name: "Arjun" }],
    categories: {
      physical: false,
      economic: true,
      digital: false,
    },
    economic_details: {
      money_controlled: true,
      card_withheld: false,
      amount: "45000",
    },
    digital_details: {
      platform: null,
      private_content_threat: false,
    },
    evidence: [
      {
        evidence_id: "evidence-002-bank",
        type: "bank_statement",
        filename: "bank_statement_june_demo.pdf",
        description: "Demo bank statement showing disputed transaction.",
        captured_at: "2026-06-11T19:02:00+05:30",
      },
      {
        evidence_id: "evidence-002-sms",
        type: "sms",
        filename: "bank_transaction_sms.txt",
        description: "Demo transaction notification.",
        captured_at: "2026-06-11T18:21:00+05:30",
      },
    ],
    created_at: "2026-06-11T19:02:00+05:30",
  },

  {
    incident_id: "incident-anita-003",
    user_id: DEMO_USER.id,
    description:
      "Meena and Anish kept Anita's Aadhaar card and other important personal documents in their room. Anita asked for them back because she needed them for official work, but was told she could not access them without Arjun's permission.",
    date: "2026-06-19",
    time: "10:15",
    location: "Home",
    people_involved: [
      { role: "mother-in-law", name: "Meena" },
      { role: "father-in-law", name: "Anish" },
      { role: "husband", name: "Arjun" },
    ],
    categories: {
      physical: false,
      economic: true,
      digital: false,
    },
    economic_details: {
      money_controlled: true,
      card_withheld: false,
      amount: null,
    },
    digital_details: {
      platform: null,
      private_content_threat: false,
    },
    evidence: [
      {
        evidence_id: "evidence-003-aadhaar",
        type: "document",
        filename: "aadhaar_copy_demo.pdf",
        description: "Fictional demo copy representing an identity document.",
        captured_at: "2026-06-19T11:00:00+05:30",
      },
      {
        evidence_id: "evidence-003-sms",
        type: "sms",
        filename: "document_request_messages.txt",
        description: "Demo messages regarding return of documents.",
        captured_at: "2026-06-19T11:06:00+05:30",
      },
    ],
    created_at: "2026-06-19T11:06:00+05:30",
  },

  {
    incident_id: "incident-anita-004",
    user_id: DEMO_USER.id,
    description:
      "Arjun took Anita's debit card and told her she would not be permitted to use her own account. Manan was present when Anita asked for the card back and supported Arjun's decision.",
    date: "2026-06-28",
    time: "20:45",
    location: "Home",
    people_involved: [
      { role: "husband", name: "Arjun" },
      { role: "brother-in-law", name: "Manan" },
    ],
    categories: {
      physical: false,
      economic: true,
      digital: false,
    },
    economic_details: {
      money_controlled: true,
      card_withheld: true,
      amount: null,
    },
    digital_details: {
      platform: null,
      private_content_threat: false,
    },
    evidence: [
      {
        evidence_id: "evidence-004-bank",
        type: "bank_statement",
        filename: "account_statement_demo.pdf",
        description: "Demo account activity record.",
        captured_at: "2026-06-28T21:15:00+05:30",
      },
      {
        evidence_id: "evidence-004-sms",
        type: "sms",
        filename: "card_related_sms.txt",
        description: "Demo messages concerning access to the account.",
        captured_at: "2026-06-28T21:16:00+05:30",
      },
    ],
    created_at: "2026-06-28T21:16:00+05:30",
  },

  {
    incident_id: "incident-anita-005",
    user_id: DEMO_USER.id,
    description:
      "Arjun threatened Anita that he would circulate a private video of her if she spoke about what was happening at home or contacted anyone for help. He repeatedly told her that the video would be sent to people she knew.",
    date: "2026-07-07",
    time: "23:10",
    location: "Home",
    people_involved: [{ role: "husband", name: "Arjun" }],
    categories: {
      physical: false,
      economic: false,
      digital: true,
    },
    economic_details: {
      money_controlled: false,
      card_withheld: false,
      amount: null,
    },
    digital_details: {
      platform: "WhatsApp",
      private_content_threat: true,
    },
    evidence: [
      {
        evidence_id: "evidence-005-sms",
        type: "sms",
        filename: "private_video_threat_messages.txt",
        description: "Demo SMS/chat evidence documenting the threat.",
        captured_at: "2026-07-07T23:17:00+05:30",
      },
      {
        evidence_id: "evidence-005-video",
        type: "video",
        filename: "private_video_proof_demo.mp4",
        description:
          "Demo placeholder representing a privately held video file; no real intimate content is stored.",
        captured_at: "2026-07-07T23:20:00+05:30",
      },
    ],
    created_at: "2026-07-07T23:20:00+05:30",
  },

  {
    incident_id: "incident-anita-006",
    user_id: DEMO_USER.id,
    description:
      "An argument involving Arjun, Anish and Manan escalated when Anita tried to leave the room. Arjun blocked the doorway and physically intimidated her while Anish and Manan remained present.",
    date: "2026-07-18",
    time: "22:05",
    location: "Home",
    people_involved: [
      { role: "husband", name: "Arjun" },
      { role: "father-in-law", name: "Anish" },
      { role: "brother-in-law", name: "Manan" },
    ],
    categories: {
      physical: true,
      economic: false,
      digital: false,
    },
    economic_details: {
      money_controlled: false,
      card_withheld: false,
      amount: null,
    },
    digital_details: {
      platform: null,
      private_content_threat: false,
    },
    evidence: [
      {
        evidence_id: "evidence-006-photo",
        type: "photo",
        filename: "doorway_photo_demo.jpg",
        description: "Demo photograph documenting the scene.",
        captured_at: "2026-07-18T22:24:00+05:30",
      },
      {
        evidence_id: "evidence-006-sms",
        type: "sms",
        filename: "incident_followup_sms.txt",
        description: "Demo follow-up messages.",
        captured_at: "2026-07-18T22:32:00+05:30",
      },
    ],
    created_at: "2026-07-18T22:32:00+05:30",
  },

  {
    incident_id: "incident-anita-007",
    user_id: DEMO_USER.id,
    description:
      "Anita noticed that Arjun had access to her phone and accounts without her permission. He demanded her passwords and questioned her about private conversations, while Manan warned her not to change the passwords.",
    date: "2026-07-29",
    time: "19:40",
    location: "Home",
    people_involved: [
      { role: "husband", name: "Arjun" },
      { role: "brother-in-law", name: "Manan" },
    ],
    categories: {
      physical: false,
      economic: false,
      digital: true,
    },
    economic_details: {
      money_controlled: false,
      card_withheld: false,
      amount: null,
    },
    digital_details: {
      platform: "WhatsApp",
      private_content_threat: false,
    },
    evidence: [
      {
        evidence_id: "evidence-007-sms",
        type: "sms",
        filename: "password_monitoring_messages.txt",
        description: "Demo messages documenting password demands.",
        captured_at: "2026-07-29T20:05:00+05:30",
      },
    ],
    created_at: "2026-07-29T20:05:00+05:30",
  },

  {
    incident_id: "incident-anita-008",
    user_id: DEMO_USER.id,
    description:
      "Meena told Anita that she should stop working and hand over her salary to the family. Arjun also retained Anita's important documents and said she would receive them only when she agreed to his financial demands.",
    date: "2026-08-09",
    time: "17:30",
    location: "Home",
    people_involved: [
      { role: "mother-in-law", name: "Meena" },
      { role: "husband", name: "Arjun" },
    ],
    categories: {
      physical: false,
      economic: true,
      digital: false,
    },
    economic_details: {
      money_controlled: true,
      card_withheld: false,
      amount: "30000",
    },
    digital_details: {
      platform: null,
      private_content_threat: false,
    },
    evidence: [
      {
        evidence_id: "evidence-008-bank",
        type: "bank_statement",
        filename: "salary_account_demo.pdf",
        description: "Demo salary-account statement.",
        captured_at: "2026-08-09T18:02:00+05:30",
      },
      {
        evidence_id: "evidence-008-aadhaar",
        type: "document",
        filename: "identity_document_demo.pdf",
        description: "Fictional demo identity-document copy.",
        captured_at: "2026-08-09T18:05:00+05:30",
      },
    ],
    created_at: "2026-08-09T18:05:00+05:30",
  },

  {
    incident_id: "incident-anita-009",
    user_id: DEMO_USER.id,
    description:
      "A confrontation at home escalated across several forms of control. Arjun physically intimidated Anita, demanded access to her finances and repeated that he could release the private video if she sought help. Meena and Anish were present during the confrontation.",
    date: "2026-08-27",
    time: "21:50",
    location: "Home",
    people_involved: [
      { role: "husband", name: "Arjun" },
      { role: "mother-in-law", name: "Meena" },
      { role: "father-in-law", name: "Anish" },
    ],
    categories: {
      physical: true,
      economic: true,
      digital: true,
    },
    economic_details: {
      money_controlled: true,
      card_withheld: true,
      amount: "52000",
    },
    digital_details: {
      platform: "WhatsApp",
      private_content_threat: true,
    },
    evidence: [
      {
        evidence_id: "evidence-009-photo",
        type: "photo",
        filename: "incident_photo_demo.jpg",
        description: "Demo photograph documenting the incident.",
        captured_at: "2026-08-27T22:20:00+05:30",
      },
      {
        evidence_id: "evidence-009-sms",
        type: "sms",
        filename: "threat_messages_demo.txt",
        description: "Demo messages documenting threats and financial demands.",
        captured_at: "2026-08-27T22:24:00+05:30",
      },
      {
        evidence_id: "evidence-009-video",
        type: "video",
        filename: "private_video_evidence_demo.mp4",
        description:
          "Demo placeholder representing video evidence; no real intimate content is stored.",
        captured_at: "2026-08-27T22:28:00+05:30",
      },
      {
        evidence_id: "evidence-009-bank",
        type: "bank_statement",
        filename: "bank_statement_august_demo.pdf",
        description: "Demo bank statement showing disputed activity.",
        captured_at: "2026-08-27T22:30:00+05:30",
      },
    ],
    created_at: "2026-08-27T22:30:00+05:30",
  },
];

export function getToken() {
  return localStorage.getItem("antara_token");
}

export function setToken(token: string) {
  localStorage.setItem("antara_token", token);
}

export function clearToken() {
  localStorage.removeItem("antara_token");
  localStorage.removeItem("antara_user");
}

function read<T>(key: string, fallback: T): T {
  try {
    const value = localStorage.getItem(key);
    return value ? (JSON.parse(value) as T) : fallback;
  } catch {
    return fallback;
  }
}

function write(key: string, value: unknown) {
  localStorage.setItem(key, JSON.stringify(value));
}

function seedDemoCase() {
  if (localStorage.getItem(DEMO_CASE_KEY)) {
    return;
  }

  write(INCIDENT_KEY, DEMO_INCIDENTS);
  localStorage.setItem(DEMO_CASE_KEY, "true");
}

function now() {
  return new Date().toISOString();
}

function makeId(prefix: string) {
  return `${prefix}-${Date.now().toString(36)}`;
}

function getIncidentTags(incident: any) {
  const tags: string[] = [];

  if (incident.categories?.physical) {
    tags.push("physical_safety");
  }

  if (incident.categories?.economic) {
    tags.push("economic_control");
  }

  if (incident.categories?.digital) {
    tags.push("digital_threat");
  }

  if (incident.economic_details?.card_withheld) {
    tags.push("card_withheld");
  }

  if (incident.economic_details?.money_controlled) {
    tags.push("money_controlled");
  }

  if (incident.digital_details?.private_content_threat) {
    tags.push("private_content_threat");
  }

  if (incident.digital_details?.platform) {
    tags.push(`platform:${incident.digital_details.platform}`);
  }

  return tags;
}

function buildCaseRecord() {
  const incidents = read<any[]>(INCIDENT_KEY, []);

  const tags = Array.from(
    new Set(incidents.flatMap(getIncidentTags))
  );

  const categories = Array.from(
    new Set(
      incidents.flatMap((incident) => {
        const result: string[] = [];

        if (incident.categories?.physical) {
          result.push("physical");
        }

        if (incident.categories?.economic) {
          result.push("economic");
        }

        if (incident.categories?.digital) {
          result.push("digital");
        }

        return result;
      })
    )
  );

  return {
    case_id: "demo-case-001",
    user_id: DEMO_USER.id,

    readiness_score: Math.min(
      100,
      28 + incidents.length * 18 + tags.length * 4
    ),

    tags,

    summary: {
      incident_count: incidents.length,
      evidence_count: 0,
      categories_present: categories,
    },

    generated_packs: [],

    incident_count: incidents.length,

    updated_at: now(),
  };
}

function demoRequest<T>(
  path: string,
  options: RequestInit = {}
): T {
  const method = (options.method ?? "GET").toUpperCase();

  let body: any = null;

  if (typeof options.body === "string") {
    try {
      body = JSON.parse(options.body);
    } catch {
      body = null;
    }
  }

  const incidents = read<any[]>(INCIDENT_KEY, []);

  // -------------------------
  // AUTH
  // -------------------------

  if (
    path === "/api/auth/login" ||
    path === "/api/auth/register"
  ) {
    const response = {
      access_token: "demo-token-antara-local",
      token_type: "bearer",
      user: DEMO_USER,
    };

    setToken(response.access_token);

    localStorage.setItem(
      "antara_user",
      JSON.stringify(DEMO_USER)
    );

    return response as T;
  }

  if (path === "/api/auth/me") {
    return DEMO_USER as T;
  }

  // -------------------------
  // RECORD
  // -------------------------

  if (
    path === "/api/incidents" &&
    method === "POST"
  ) {
    const incident = {
      ...body,

      incident_id: makeId("incident"),

      user_id: DEMO_USER.id,

      created_at: now(),

      evidence: [],
    };

    write(
      INCIDENT_KEY,
      [...incidents, incident]
    );

    return incident as T;
  }

  // -------------------------
  // STRUCTURE
  // -------------------------

  if (
    path === "/api/case/structure" &&
    method === "POST"
  ) {
    const incident =
      incidents.find(
        (item) =>
          item.incident_id === body?.incident_id
      ) ?? incidents.at(-1);

    if (!incident) {
      throw new Error(
        "No incident is available to structure."
      );
    }

    return {
      ...incident,

      ai_classification: {
        tags: getIncidentTags(incident),

        confidence: 0.96,

        method:
          "ANTARA local decision model (demo)",
      },
    } as T;
  }

  // -------------------------
  // CASE / PREPARE
  // -------------------------

  if (
    path === "/api/case" ||
    path.startsWith("/api/case/")
  ) {
    return buildCaseRecord() as T;
  }

  // -------------------------
  // PRESERVE / GUARDIAN
  // -------------------------

  if (
    path === "/api/guardian/backup" &&
    method === "POST"
  ) {
    const backup = {
      guardian_id: "GV-DEMO-001",

      backed_up_at: now(),

      message:
        "Protected Guardian copy created locally for the demo.",

      guardian_name:
        body?.guardian_name ?? "Demo Guardian",

      guardian_contact:
        body?.guardian_contact ?? null,
    };

    write(GUARDIAN_KEY, backup);

    return backup as T;
  }

  if (
    path === "/api/guardian/recover" &&
    method === "POST"
  ) {
    const backup =
      read<any>(GUARDIAN_KEY, null);

    if (
      !backup ||
      backup.guardian_id !== body?.guardian_id
    ) {
      throw new Error(
        "Guardian copy not found."
      );
    }

    return {
      user_id: DEMO_USER.id,

      backed_up_at:
        backup.backed_up_at,

      incidents:
        read<any[]>(
          INCIDENT_KEY,
          []
        ),
    } as T;
  }

  // -------------------------
  // DOCUMENT VAULT
  // -------------------------

  if (
    path === "/api/documents" &&
    method === "GET"
  ) {
    return {
      user_id: DEMO_USER.id,

      documents:
        read<any[]>(
          DOCUMENT_KEY,
          []
        ),
    } as T;
  }

  if (
    path === "/api/documents" &&
    method === "POST"
  ) {
    const form =
      options.body instanceof FormData
        ? options.body
        : null;

    const documentType = String(
      form?.get("document_type") ??
        "other"
    );

    const label = String(
      form?.get("label") ??
        "Document"
    );

    const file =
      form?.get("file") as File | null;

    const document = {
      document_id:
        makeId("doc"),

      user_id:
        DEMO_USER.id,

      document_type:
        documentType,

      label,

      original_filename:
        file?.name ??
        "protected-copy",

      sha256_hash:
        "demo-local-hash",

      created_at:
        now(),
    };

    const existing =
      read<any[]>(
        DOCUMENT_KEY,
        []
      );

    write(
      DOCUMENT_KEY,
      [...existing, document]
    );

    return document as T;
  }

  if (
    path.startsWith("/api/documents/") &&
    method === "DELETE"
  ) {
    const documentId =
      path.split("/").pop();

    const existing =
      read<any[]>(
        DOCUMENT_KEY,
        []
      );

    write(
      DOCUMENT_KEY,
      existing.filter(
        (doc) =>
          doc.document_id !==
          documentId
      )
    );

    return undefined as T;
  }

  // -------------------------
  // PACKS
  // -------------------------

  if (
    path === "/api/packs/generate" &&
    method === "POST"
  ) {
    const packType =
      body?.pack_type ??
      "dv_pack";

    const selected =
      incidents.filter(
        (incident) => {
          if (
            packType ===
            "economic_pack"
          ) {
            return incident.categories?.economic;
          }

          if (
            packType ===
            "cyber_pack"
          ) {
            return incident.categories?.digital;
          }

          return incident.categories?.physical;
        }
      );

    return {
      pack_type:
        packType,

      user_id:
        DEMO_USER.id,

      generated_at:
        now(),

      incident_count:
        selected.length,

      incidents:
        selected,

      totals: {
        incidents_with_card_withheld:
          selected.filter(
            (i) =>
              i.economic_details
                ?.card_withheld
          ).length,

        incidents_with_money_controlled:
          selected.filter(
            (i) =>
              i.economic_details
                ?.money_controlled
          ).length,
      },

      platforms_involved:
        Array.from(
          new Set(
            selected
              .map(
                (i) =>
                  i.digital_details
                    ?.platform
              )
              .filter(Boolean)
          )
        ),
    } as T;
  }

  // -------------------------
  // NAVIGATE
  // -------------------------

  if (
    path.startsWith(
      "/api/support/recommendations"
    )
  ) {
    return [
      {
        id:
          "delhi-women-helpline",

        name:
          "Delhi Women Helpline",

        category:
          "Women Safety",

        phone:
          "181",

        area:
          "Delhi",

        city:
          "Delhi",

        is_24x7:
          true,

        verified:
          true,

        notes:
          "Demo support resource — verify current availability before relying on it.",
      },

      {
        id:
          "national-women-helpline",

        name:
          "National Women Helpline",

        category:
          "Women Safety",

        phone:
          "181",

        area:
          "India",

        city:
          "Delhi",

        is_24x7:
          true,

        verified:
          true,

        notes:
          "Demo support resource.",
      },

      {
        id:
          "emergency-services",

        name:
          "Emergency Services",

        category:
          "Emergency",

        phone:
          "112",

        area:
          "Delhi",

        city:
          "Delhi",

        is_24x7:
          true,

        verified:
          true,

        notes:
          "Use for immediate danger or emergency assistance.",
      },
    ] as T;
  }

  // -------------------------
  // HANDOFF
  // -------------------------

  if (
    path === "/api/handoff/generate" &&
    method === "POST"
  ) {
    const allowed =
      body?.consented_categories ??
      [];

    return {
      user_id:
        DEMO_USER.id,

      generated_at:
        now(),

      consented_categories:
        allowed,

      recipient_note:
        body?.recipient_note ??
        null,

      incidents:
        incidents.filter(
          (incident) =>
            allowed.some(
              (category: string) =>
                incident.categories?.[
                  category
                ]
            )
        ),
    } as T;
  }

  throw new Error(
    `Unsupported demo operation: ${path}`
  );
}

// ------------------------------------
// MAIN API FUNCTION
// ------------------------------------

export async function apiRequest<T>(
  path: string,
  options: RequestInit = {}
): Promise<T> {
  // IMPORTANT:
  // This demo does NOT call a backend.
  // Everything happens locally in the browser.

  seedDemoCase();

  await new Promise(
    (resolve) =>
      setTimeout(resolve, 120)
  );

  return demoRequest<T>(
    path,
    options
  );
}