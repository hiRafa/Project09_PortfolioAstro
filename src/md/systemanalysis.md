# 3. System Analysis & Modeling

# **3. System Analysis & Modeling**

## 🧩 **3.1 System Overview / Architecture Context**

The Wildlife Rescue Reporting Platform is a web-based system that enables citizens, volunteers, organizations, and authorities to report, track, and manage animal rescue operations. The platform connects public users and verified rescue entities through shared data, donation campaigns, and operational dashboards. External systems include payment gateways for donations and possible data APIs for partner organizations.

### DFD level 0: Context Diagram

[https://www.figma.com/board/JeWDD4A8H5dhMQnpUJiE7N/STW2-Use-Case-Diagram?node-id=60-417&t=tf7lnae0iUBWCAse-4](https://www.figma.com/board/JeWDD4A8H5dhMQnpUJiE7N/STW2-Use-Case-Diagram?node-id=60-417&t=tf7lnae0iUBWCAse-4)

## Data Flow Diagram Table

| Level | DFD Name / Process | Key Data Stores | Actors | Notes |  |
| --- | --- | --- | --- | --- | --- |
| 0 | Context Diagram | N/A | All Users, Organization Staff, Admin | Single process showing system boundaries | • Registered User / Profile
• Unregistered User
• Organization Staff
• Admin
**High-level Flow:**
• Users submit incidents → System processes → Confirmation/Notifications
• Users make donations → System updates campaigns → Organization receives updates
• Users view reports / operations / organizations |
| 1 | Incident Management | Incident, Report, MasterReport, MegaReport | Users, Admin | High-level data movement of reporting | Trigger: Create Incident Report from Citizen
Output: Stored Incident, Notification to Volunteer/Admin |
| 1 | Operations Management | FieldOperation, MedicalOperation | Users, Organization | Manage assignments & link to reports | Trigger: Operation Updates
Output: Updated Operation Records, Notifications |
| 1 | Donation & Campaign Management | Donation, Campaign, Profile, Organization | Users, Organization | Manage donation flows | MVP:
Input: View ongoing Campaigns. Access Donation Campaign on donation platform.

Goal:
Input: Donate
Output: Payment confirmation, Campaign update |
| 1 | User & Profile Management | Account, Profile | Users | Create/update user data, link to activities | Input: Account Info
Output: Profile updates, role assignments |
| 1 | Organization Management | Profile, Organizations | Users, Organization | Handles organization data and relationships | Input: Organization Info
Output: Links to Reports, Campaigns, Operations |
| 1 | Notifications | Notifications | Users, Organization | Deliver system notifications | Input: System events
Output: Notifications → Profile / Organization |
| 2 | Incident Reporting Flow | Incident, Report, MasterReport, Comment | Users | Detailed validation, report creation, comments | • User submits incident → System validates → Creates Report → Optional MasterReport aggregation → Notifications sent
• Include polymorphic Comments flow |
| 2 | MasterReport Creation Flow | MasterReport, Report, FieldOperation, Campaign | Admin, Organization | Aggregation of multiple reports | • Combine multiple Reports → Generate MasterReport → Link shared Operations / Campaigns
• Show data duplication prevention and rules |
| 2 | Donation / Campaign Flow | Donation, Campaign, Organization | Users, Organization | Update totals, notifications | MVP: use donation platform.
Goal:
• User makes donation → Update Campaign → Update Organization totals → Notify donors / organization
• Include optional donation links and matching campaigns |
| 2 | Operation Assignment Flow | FieldOperation, MedicalOperation, Report/MasterReport | Users, Organization | Track operations and participation | • Assign Field / Medical Operations → Link to Reports / MasterReports → Notify participants → Track states |

### DFD Level 1

[https://www.figma.com/board/JeWDD4A8H5dhMQnpUJiE7N/STW2-Diagrams?node-id=111-2089&t=2nMXQIAkcfLAiayw-4](https://www.figma.com/board/JeWDD4A8H5dhMQnpUJiE7N/STW2-Diagrams?node-id=111-2089&t=2nMXQIAkcfLAiayw-4)

### DFD Level 2

- Incident & Reports
- Donations
- Operations

[https://www.figma.com/board/JeWDD4A8H5dhMQnpUJiE7N/STW2-Diagrams?node-id=106-1224&t=2nMXQIAkcfLAiayw-4](https://www.figma.com/board/JeWDD4A8H5dhMQnpUJiE7N/STW2-Diagrams?node-id=106-1224&t=2nMXQIAkcfLAiayw-4)

## **Domain Model / Entities Relationships**

| Entity | Relationships | Notes | Example |
| --- | --- | --- | --- |
| **Account** | 1-1 → Profile |  |  |
| **Profile** | 1-many → Incident
1-many → Donation
1-many → Comment
many-many → Organization |  |  |
| **Organization** | 1-many → FieldOperation
1-many → MedicalOperation
1-many → Campaign
1-many → Report
many-many → Profile |  |  |
| **Report** | 1-many → Incident
1-many → Campaign
1-many → Comment
1-many → FieldOperation
1-many → MedicalOperation
many-many → MasterReport
many-1 → Organization | If 1 report is not enough, create a master report to aggregate different reports.  |  |
| **MasterReport** | many-many → Report
many-many → MegaReport
1-many → Campaign
1-many → Comment
1-many → FieldOperation
1-many → MedicalOperation | - If 1 report is not enough, create a master report to aggregate different reports. 
- If 1 single operation or campaign attends multiple reports, link it to the master.
- Many report can belong to many master reports. Operations and campaigns can only belong to either a single report or master report. | MasterReport 123
├── Report A
│     └── Incident X
│     └── Incident H
├── Report B
│     └── Incident Y
└── FieldOperation 1 (shared)

MasterReport 245
├── Report A
├── Report Va
├── Report Da
└── Campaign 1 (shared) |
| **MegaReport** | 1-many → MasterReport | Can get many MasterReports  |  |
| **Incident** | 1-many → Comment
many-1 → Report | can only belong to report, not master or mega. |  |
| **Comment** | many-1 → Profile
many-1 → Report / MasterReport / Incident (polymorphic) | 1 comment can only belong to a single profile and a single target (report, masterreport, or incident) but the target can hold many comments, just as the profile can make many comments |  |
| **FieldOperation** | many-1 → Report or MasterReport
many-1 → Organization | In case an operation attends to more than one report, user a MasterReport instead. 
Can only link to a single report or master report |  |
| **MedicalOperation** | many-1 → Report or MasterReport
many-1 → Organization | In case an operation attends to more than one report, user a MasterReport instead. |  |
| **Campaign** | many-1 → Organization
many-1 → Report
1-many → Donations | In case an operation attends to more than one report, user a MasterReport instead. 
Can only link to a single report or master report |  |
| **Donation** | many-1 → Profile
many-1 → Campaign |  |  |
| **Notifications** | many-many → Profile | Only sent to Users when states changes. Minor updates dont send notifications |  |

### Conceptual ERD (Entity Relationship Diagram)

[https://www.figma.com/board/JeWDD4A8H5dhMQnpUJiE7N/STW2-Diagrams?node-id=73-521&t=tB4DLYxtnkR6V9b3-4](https://www.figma.com/board/JeWDD4A8H5dhMQnpUJiE7N/STW2-Diagrams?node-id=73-521&t=tB4DLYxtnkR6V9b3-4)

## Data Schemas & UML Class Diagram & Data Rules

| **Rule Category** | **Rule** | **Description / Enforcement** |
| --- | --- | --- |
| **Time Rules** | Max duration = 365 days | No operation/campaign should exceed 365 days. Backend validation required on creation & updates. |
| **Amount Limits** | Max ongoing operations per team | A team cannot be assigned to more than *X* active operations at the same time (value defined by org policy). |
|  | Max medical operations | Limits how many medical operations can be active for an organization, team, or vet (defined by policies). Prevents overload and ensures safety. |
| **Derived / Computed Fields** | Animal age from rescue date | Computed dynamically. Never stored—calculated: `age = currentDate - rescueDate`. |
|  | Campaign progress % | Computed: `progress = totalDonations / targetAmount`. Used for dashboards & validations. |
|  | Treatment intensity score | Derived from vitals (e.g., heart rate, temperature, mobility). Useful for prioritization/scoring. |
| **Audit & Logging Rules** | Who changed a state | `updatedByProfile_id` required in all state changes. |
|  | Old vs new state | Each state transition must record: `previousState`, `newState`. |
|  | No deletion | Entities cannot be permanently deleted. Use `states: inactive`, `archived`, or `soft_deleted`. |
|  | Reason / notes | All non-automatic state changes must include a justification. |
|  | Timestamp | Every entity must store: `createdAt`, `updatedAt`, and optionally `stateChangedAt`. |
| **Entity-Level Scoring** | Animal risk level | Score computed from injury severity, age, environment, and condition. Used for prioritizing care. |
|  | Incident severity | Calculated from: threat level, species type, human proximity, recurrence. |
|  | Operation efficiency | Score based on duration, resources used, outcomes, team availability. Helps analytics & future planning. |

[UML Classes (for easy editing)](https://www.notion.so/UML-Classes-for-easy-editing-2bed6806c9c580afb7a8d1e9d020a349?pvs=21)

[https://www.figma.com/board/JeWDD4A8H5dhMQnpUJiE7N/STW2-Diagrams?node-id=161-1079&t=wdKu9Xnk3CqktO27-4](https://www.figma.com/board/JeWDD4A8H5dhMQnpUJiE7N/STW2-Diagrams?node-id=161-1079&t=wdKu9Xnk3CqktO27-4)

| Field | App Validation
(unless specified the opposite) | Meaning
Constraints / Allowed Values |
| --- | --- | --- |
| **id** | required | Unique identifier of the organization (UUID or ObjectId). |
| organizationteam_id | optional | Team responsible |
| incident_id | optional | Linked incident |
| medicaloperation_id | optional | Linked medical operations |
| fieldoperation_id | optional | Linked field operations |
| campaignoperation_id | optional | Linked campaign operations |
| donation_id | optional | Donations made by the user |
| profile_id | optional | Linked user profile |
| createdAt | required | Timestamp of account creation
ISO 8601 format |
| updatedAt | required | Timestamp of last update
ISO 8601 format; updated on any change |
| states | required | Lifecycle / access control status |
| createdByProfile_id | required | Profile that created this Organization in the System. |

## Account

```yaml
Account:
  key_fields:
    - id: string
  attributes:
    - profile_id?: string
    - email: string
    - password_hash: string
    - role: enum[]
    - states: enum[]
    - createdAt: string
    - updatedAt?: string
  methods:
    - updateEmail(newEmail: string)
    - updateProfileId(newProfileId: string)
    - updateRole(newRole: enum)
    - updatePassword(newPasswordHash: string)
    - suspend(reason: string)
    - activate()
    - lock()
    - delete()
```

| Field | Required | Notes / Constraints |
| --- | --- | --- |
| id | Yes | Primary key, usually auto-generated |
| email | Yes | Must be unique; validated for proper email format |
| password_hash | Yes | Never store plain text; use secure hashing algorithm |
| role | Yes | check table below |
| states | Yes | consult states table
[](https://www.notion.so/2bed6806c9c580b6bde3ccccc6dda16b?pvs=21)  |

### User Roles / Permissions (and Contextual Permissions) / **Role-Based Access Rules (RBAC)**

**Least Privilege & Trust Level Escalation**

Roles unlock permissions **incrementally**, preventing privilege misuse.

If Users provided documents properly from the go, they can skip a few roles

Each step requires explicit validation, which prevents unauthorized escalation.

**Auditability**

All sensitive actions (reviews, identity checks, suspensions) are logged with:

- Actor role
- Timestamp
- Action performed
- Entity affected

This guarantees compliance and traceability.

**Future-Proof Structure**

Permissions are grouped semantically so additional roles can be added without restructuring the system.

(E.g., “Reviewer”, “Field Operator”, “Veterinarian” can be created later as sub-roles of "Professional".)

| Role | Create Account | Create Reports | Review Reports | Identity Verification | System Configuration | Special Authorizations | Description | How Role is Granted |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Unverified** | No | No | No | No | No | — | Basic user with minimal access. Can sign up but cannot participate until verified. | User registers (email/phone sign-in). |
| **Verified** | No | No | No | No | No | — | Confirmed real user, allowed to use non-sensitive parts of the system. | Email/phone/social login validated. |
| **Official** | No | No | No | No | No | — | Identity-verified individual (e.g., government ID reviewed). | Admin validates ID document. |
| **Professional** | No | **Yes** | **Yes (specific domains)** | No | No | — | Certified contributor such as vets, rangers, or rescue workers. | Certifications/proof of work approved by Admin. |
| **Moderator** | **Yes** | **Yes** | **Yes** | **Yes** | No | Suspend organizations | Trusted internal reviewer for safety-sensitive tasks. | Assigned by Admin. |
| **Admin** | **Yes** | **Yes** | **Yes** | **Yes (full)** | **Yes** | Suspend orgs, system overrides | System administrator with full authority. | Assigned internally. |
| **GovAgent** | **Yes** | No | No | No | No | Access government datasets | Authorized government officials with limited system access. | Registered by government authority. |

```yaml
Profile:
  key_fields:
    - id: string
    - account_id: string 
  attributes:
    - name: string
    - familyName: string
    - dateOfBirth?: string
    - gender?: enum[male, female, other]
    - nationality?: string
    - preferredLanguage?: string
    - phone: int
    - address_country: string
    - address_area: string
    - address_city?: string
    - address_block?: string
    - address_buildingroom?: string
    - createdAt: string
    - updatedAt: string
		- organizations: array[orgmembers_id]
	  - teams: array[teammembers_id]
    - medicaloperation_id?: array[string]
    - fieldoperation_id?: array[string]
    - donation_id?: array[string]
    - documents?: array[
        {
          type: string
          image_front: array[string]
          image_back: array[string]
          image_selfie: array[string]
          expiration: string
          number_code?: string
          verification_states: enum[string]
          verified_at?: string 
        }
      ]
    - certifications?: array[
        {
          type: string
          image_front: array[string]
          image_back: array[string]
          image_selfie: array[string]
          expiration: date
          number_code?: string
          verification_states: enum[string]
          verified_at?: string
        }
      ]
  methods:
    - changeName()
    - changePassword()
    - changeEmail()
    - changeAddress()
    - updateDocument(document_id: string, newData)
    - updatedAteOfBirth()
    - updateGender()
    - updateNationality()
    - updatePreferredLanguage()
    - submitDocumentForVerification(document_id: string)
    - approveDocument(document_id: string)
    - rejectDocument(document_id: string)
```

| Field | Required | Notes |
| --- | --- | --- |
| name | Yes | — |
| familyName | Yes | — |
| dateOfBirth | No | Store as ISO 8601 YYYY-MM-DD |
| gender | No | — |
| nationality | No | Country of nationality
ISO country name or code |
| preferredLanguage | No | UI/communication language
e.g. "en", "pt-BR", "ja" |
| phone | Yes | Store as string (supports +, 0s) |
| address_country | Yes | Country |
| address_area | Yes | Region / Prefecture |
| address_city | No | City |
| address_block | No | Block / neighborhood |
| address_buildingroom | No | Building, apartment, room |
| organizations / teams | No | OrgMembers / TeamMembers ID |

### Documents

Required fields are required when Documents are provided

| image_front | Yes | URLs to uploaded imagesAt least 1 image |
| --- | --- | --- |
| image_back | Yes | URLs for back sideSome docs may not have back |
| image_selfie | Yes | Selfie holding the documentUsed for identity validation |
| expiration | Yes | YYYY-MM-DD |
| number_code | Yes | Document number |
| verification_states | Yes | Lifecycle: none, pending_review, approved, rejected |
| verified_at | Yes | When approval happenedOnly set when approved |

```yaml
Notification:
  key_fields:
    - id: string
  attributes:
    - profile_id?: string                  # single recipient
    - multiprofile_ids?: array[string]     # multiple recipients
    - targetScope: enum[single, multiple, system]
    - title?: string
    - message: string
    - type: enum[system, report_update, donation, campaign, general]
    - channel: enum[in_app, email, sms, push]
    - states: enum[]
    - relatedEntity?: object
        - type: enum[report, campaign, donation, operation]
        - id: string
    - createdAt: string
    - updatedAt?: string
  methods:
    - archive()
```

| Field | Meaning | Constraints / Allowed Values | App Validation |
| --- | --- | --- | --- |
| `profile_id` | Single recipient | FK → Profile.id | optional if multiprofile_ids used |
| `multiprofile_ids` | Multiple recipients | array[string], FK → Profile.id | optional if profile_id used |
| `targetScope` | Notification target type | enum `[single, multiple, system]` | required |
| `type` | Notification category | enum `[system, report_update, donation, campaign, general]` | required |
| `channel` | Delivery channel | enum `[in_app, email, sms, push]` | required |
| `states` | Notification state | enum `[pending, sent, delivered, archived]` | updated by app |
| `relatedEntity` | Optional linked entity | object `{type: enum[report, campaign, donation, operation], id: string}` | optional |

```yaml
Organization:
  key_fields:
    - id: string
  attributes:
    - legalName: string
    - brandName?: string
    - description?: string
    - headLocation:
        - country: string
        - area: string
        - city?: string
        - block?: string
        - buildingRoom?: string
    - memberCount?: int
    - actingFields: array[enum]
    - openDate: string
    - finishDate?: string
    - phone?: string
    - email: string
    - orgType: array[enum[string]]
    - previousRegistration?: array[
        {
          legalName: string,
          brandName: string,
	        number: string
	        documentUrls?: array[string]
	        verifiedByProfile_id?: string
          verificationState: enum[string]
          verifiedAt?: string
        }
      ]
    - currentRegistration:
	        number: string
	        documentUrls?: array[string]
	        verifiedByProfile_id?: string
          verificationState: enum[string]
          verifiedAt?: string
    - logoUrl?: string
    - profileImageUrl?: string
    - socialMedia: array[
        {
          platform: enum[string],
          url: string
        }
      ]
    - website?: string
    - states: enum[string]
    - createdAt: string
    - updatedAt?: string
    - createdByProfile_id: string
  methods:
    - updateLegalName()
    - updateBrandName()
    - updateDescription()
    - updateHeadLocation()
    - updateMemberCount()
    - updatestates()
    - verifyOrganization()
    - updateContactInfo()
    - updateWebsite()
    - updateActingFields()
    - updateLogo()
    - updateRegistration()
    - updateSocialMedia()
```

| **Field** | **Required** | **Notes** |
| --- | --- | --- |
| **legalName** | Yes | Full legal name registered with authorities. |
| **brandName** | No | Public-facing name used for branding. |
| **description** | No | Organization description, mission, or summary. |
| **headLocation.country** | Yes | Country of the main headquarters. |
| **headLocation.area** | Yes | State/region/prefecture. |
| **headLocation.city** | No | City of headquarters. |
| **headLocation.block** | No | Street/block information. |
| **headLocation.buildingRoom** | No | Building/room number. |
| **memberCount** | No | Number of active members, updated periodically. |
| **actingFields** | Yes | Array of enums defining activity areas (e.g., wildlife rescue, medical care). |
| finishDate | Yes | Date the organization was initially established. |
| closeDate | No | Date the organization ceased operations (if dissolved or inactive). |
| **phone** | No | Contact phone number. |
| **email** | Yes | Official organization email. |
| **orgType** | No | Array of enums describing type: NGO, private, gov, rescue unit, etc. |
| **.number** | Yes | Official registration or license number. |
| **.documentUrls** | Yes | List of URLs referencing registration documents. |
| **.verifiedByProfile_id** | Yes | Profile ID of the admin/mod who verified it. |
| .**verificationState** | Yes | In what stage is the verification process |
| **.verifiedAt** | Yes | Date when registration was checked/validated. |
| **logoUrl** | No | URL of the organization’s logo. |
| **profileImageUrl** | No | URL of profile/banner image. |
| **socialMedia.platform** | No | Social media type (facebook, instagram, x, etc). |
| **socialMedia.url** | No | URL for the respective social media page. |
| **website** | No | Official organization website. |
| **states** | Yes | [](https://www.notion.so/2b6d6806c9c580e2aa0ad3460d6d0c8d?pvs=21)  |

```yaml
Team:
  key_fields:
    - id: string
  attributes:
    - organization_id?: string
    - name: string
    - description: string
    - teamType?: enum[]
    - operationalStatus?: enum[available, deployed, paused]
    - leaderProfile_id?: string
    - location:
        - country: string
        - area: string
        - city?: string
        - block?: string
        - buildingRoom?: string
    - visibility?: enum[]
		- coordinationChannel?: array[
				{
			    type: enum[]
			    url: string
			  }
			]
    - states: enum[]
    - createdAt: string
    - updatedAt?: string
    - createdByProfile_id: string
  methods:
    - addMember()
    - removeMember()
    - changeMemberRole()
    - changeMemberstates()
    - updateTeamInfo()
    - changeLeader()
```

| **Field** | **Required** | **Notes** |
| --- | --- | --- |
| **name** | Yes | Human-readable team name. |
| **description** | No | Text description of the team's purpose. |
| **teamType** | No | Enum — `emergency`, `medical`, `logistics`, `volunteer`, etc. Helps classify teams. |
| **operationalStatus** | No | Enum: `available`, `deployed`, `paused`. Operational readiness, unrelated to lifecycle states. |
| **leaderProfile_id** | No | Profile ID of the team leader. Null if no leader assigned. |
| **location.country** | Yes | Country where the team operates or is based. |
| **location.area** | Yes | Region / prefecture / state. |
| **location.city** | No | City or municipality. |
| **location.block** | No | Smaller geographic segment. |
| **location.buildingRoom** | No | Room, building, or unit number. |
| **visibility** | No | Enum: `organization_only`. Controls team discoverability. |
| **coordinationChannel[]** | No | Array of communication channels used by the team. |
| **coordinationChannel[].type** | No | Enum: e.g., `slack`, `whatsapp`, `line`, `discord`, `email`, etc. |
| **coordinationChannel[].url** | No | URL, handle, or invite link for the channel. |
| **states** | Yes | Enum representing lifecycle states  |

```yaml
OrgMembers:
  key_fields:
    - id: string
    - profile_id: string
    - organization_id: string
  attributes:
    - startDate: string
    - endDate?: string
		- memberRole: enum[]
    - functionalRoles: array[enum[]]
  	- notes?: string 
  	- states: enum[]
    - createdAt: string
    - updatedAt?: string
  methods:
    - assignRole()
    - updatestates()
    - endMembership()
```

```yaml
TeamMembers:
  key_fields:
    - id: string
    - profile_id: string
    - team_id: string
  attributes:
    - startDate: string
    - endDate?: string
		- memberRole: enum[]
    - functionalRoles: array[enum[]]
  	- notes?: string 
  	- states: enum[]
    - createdAt: string
    - updatedAt?: string
  methods:
    - assignRole()
    - updatestates()
    - endMembership()
```

| Field | Required | Notes |
| --- | --- | --- |
| **startDate** | Yes | ISO-8601 string (`YYYY-MM-DD` or datetime). Date the member joined the organization. |
| **endDate** | No | Filled when membership ends. Null/empty means still active. |
| **memberRole** | Yes | Permissions inside the organization |
| **functionalRoles** | No | Array of skills/operational roles |
| **notes** | No | Optional notes (admin use only). |
| **states** | Yes | Consult States Table |

| Member Role | Meaning / Capabilities |
| --- | --- |
| Manager | Full control over teams, members, operations, settings. Manages members, approves campaigns, edits org settings, oversees teams. |
| Lead | Leads a team. Can add/remove members, assign roles, update operations. |
| Editor | Standard organization member. Can join teams, participate in operations. |
| Viewer | Read-only access to organization data. No edits. |

| Functional Role | Category | Meaning / Use Cases |
| --- | --- | --- |
| **veterinarian** | Medical | Can perform medical operations, handle medication, create medical reports. |
| **medic** | Medical | Can assist vets, provide basic treatment, first aid, stabilize animals. |
| **responder** / **rescuer** | Field | Handles rescues, animal capture, emergencies. |
| **ranger** | Field | Patrols, monitors terrain, tracks wildlife, handles field hazards. |
| **driver** | Logistics | Drives rescue vehicles, transports animals safely. |
| **coordinator** | Logistics | Manages schedules, communications, resource planning. |
| **drone_operator** | Tech | Operates drones for surveillance, search, mapping. |
| **tech_specialist** | Tech | Handles sensors, cameras, tracking devices, field tech setup. |
| **data_analyst** | Tech | Analyzes reports, generates insights, supports operations with data. |
| **volunteer** | General | General support role, non-technical tasks. |
| **photographer** | Media | Documenting operations, capturing evidence. |

```yaml
FieldOperation:
  key_fields:
    - id: string
  attributes:
    - report: {
		    - id: string
		    - assignedDate: string
	    }
    - organization_id: array[string]
    - team_id: array[string]
    - name: string
    - description: string
    - type: array[enum[]]
    - startDate: string
    - endDate?: string
		- participants: array[
			{
		    - profile_id: string
		    - role: enum[]
		    - startDate: string
		    - endDate?: string
		    - states: enum[]
		  }
		]
		- location: array[{
			- goal: enum[string]
			- address_country: string
	    - address_area: string
	    - address_city?: string
	    - address_block?: string
	    - address_buildingroom?: string
		}]
		- states: enum[]
    - createdAt: string
    - updatedAt?: string
  methods:
    - updateName()
    - updateDescription()
    - updateOrganizationteam_id()
    - updateReportId()
    - updateprofile_id()
    - updateRole()
    - updateEndDate()
```

| **Field** | **Required** | **Notes** |
| --- | --- | --- |
| **report** | No | Report related to this Operation |
| **report.assignedDate** | Yes | ISO 8601 datetime when the report was linked to the operation. |
| **name** | Yes | Human-readable field operation name. |
| **description** | No | Summary or details of the operation. |
| **type[]** | No | Array of operation types (consult table). |
| **dateStart** | Yes | ISO 8601 datetime when operation started. |
| **dateEnd** | No | ISO 8601 datetime when operation ended. |
| **participants[]** | No | List of people assigned to the operation. |
| **participants[].profile_id** | Yes | Reference to Profile ID. |
| **participants[].role** | Yes | Enum: `leader`, `medic`, `rescuer`, `volunteer`, `coordinator`. |
| **participants[].startDate** | Yes | Date when the user joined the operation. |
| **participants[].endDate** | No | Date when their participation ended. |
| **participants[].states** | Yes | Enum: active, dropped, finishedTasks. Participation lifecycle state. |
| **location** | Yes | Register location data for tracking. Must be specified for operation. |
| **location.goal** | Yes | Enum describing the operational location goal (for rescue, for relocation, for temporary shelter, final shelter, original habitat, new habitat, medical facility, etc.). |
| **location.address_country** | Yes | At least country of operation. |
| **location.address_area** | Yes | Region / prefecture / state. |
| **location.address_city** | Yes | Optional city name. |
| **location.address_block** | Yes | Sub-area or block, Park, Forest, etc. |
| **location.address_buildingroom** | No | Optional building/room information. |
| **states** | Yes | [](https://www.notion.so/2b5d6806c9c5805bb234f48cd618914b?pvs=21)  |

| Field Operation Type | System Name | **Description** | **Must Data** | Business Rules | **Solution / System Behavior** |
| --- | --- | --- | --- | --- | --- |
| Animal Rescue | animal_rescue | Responding to animals in distress in the field | • Location
• Animal type/species (if known)
• Situation description
• Time of call/arrival |  |  |
| Trap Deployment | trap_deployment | Setting traps for capture, research, or monitoring | • Trap ID
• Deployment location
• Purpose
• Expected retrieval date/time | - Trap deployment requires follow-up to prevent lost traps or unattended hazards.
- Report can not be closed if it contains an Operation for setting a trap but no registration of retrieving. | Auto-create reminder/notification for retrieval.
 |
| Trap Retrieval / Deactivation | trap_retrieval_deactivation | Retrieving or disabling traps after use | • Trap ID
• Retrieval outcome
• states (removed, damaged, missing) |  |  |
| Field Assessment (On-site Survey) | field_assessment | Evaluating an area before or after an incident | • Assessment location
• Hazard or condition type
• Initial findings |  |  |
| Public Safety Intervention | public_safety_intervention | Responding **urgent or dangerous situation** involving wildlife and people | • Threat level
• Location
• Animal type
• Action taken | Require extra documentation
High-risk events need proper context
 | Require minimal threat description + location |
| Deceased Animal Removal (Carcas) | deceased_animal_removal | Removing dead wildlife from public or natural areas | • Carcass location
• Photo / proof (optional but recommended)
• Species (if identifiable)
• Condition |  |  |
| Environmental Hazard Assessment | environmental_hazard_assessment | Checking for situations affecting wildlife (fire, flood, etc.) | • Hazard type
• Location
• Severity assessment |  |  |
| Capture & Relocation | capture_relocation | Capturing and moving an animal to a safer place | • Capture location
• Relocation destination
• Animal type
• Method used | Relocation operations must be recorded for traceability (beyond just required field)
Every relocation event should be captured as a new operation | Ensures the movement chain is complete |
| Unable to Locate | unable_to_locate | When the team can’t find the animal | • Last known location
• Reason for failure
• Time spent searching |  |  |
| Human Illegal Activity | human_illegal_activity | Signs of poaching, abuse, or traps — sensitive category | • Restricted access
• Evidence description
• Location
• Required authority notification flag |  |  |

```yaml
MedicalOperation:
  key_fields:
    - id: string
  attributes:
    - reports: array[
	    {
		    - report_id: string
		    - profile_id: string
		    - assignedDate: string
	    }
    ]
    - organization_id: array[string]
    - team_id: array[string]
    - states: enum[Incoming, WaitingForCare, UnderCare, Recovering, Completed, Released, Adopted, Deceased]
    - startDate: string
    - endDate?: string
    - createdAt: string
    - updatedAt?: string
    - participants: array[
        {
          profile_id: string
          systemRole: enum[admin, moderator, member, unverified, suspended]
          functionalRole: enum[vet, medic, nurse, assistant, volunteer]
          states: enum[active, removed, withdrawn]
          startDate: string
          endDate?: string
        }
      ]
  methods:
    - updatestates()
    - updateParticipants()
    - addParticipant()
    - removeParticipant()
    - updatedAtes()

```

| Field | Meaning | Constraints / Allowed Values | App Validation |
| --- | --- | --- | --- |
| `states` | Current stage of medical operation | enum `[undercare, completed]` | — |
| `diagnosis` | Optional diagnosis details | string | optional |
| `treatment` | Optional treatment details | string | optional |
| `report_id` | Linked reports | array[string], FK → Report.id | optional |
| `organizationteam_id` | Teams involved | array[string], FK → Team.id | optional |
| participants | Profiles / Users part of the operation | array[objs] | required |

```yaml
Animal:
  key_fields:
    - id: string
  attributes:
    - species: string
    - nickname?: string
    - gender?: enum[male, female, unknown]
    - ageEstimated?: string
    - rescueLocation: string
    - microchipSerial?: string
    - createdAt: string
    - updatedAt?: string
  methods:
    - updateNickname()
    - updateMicrochipId()
    - updateRescueLocation()

```

```yaml
AnimalCondition:
  key_fields:
    - id: string
  attributes:
    - animal_id: string
    - operation_id: string
    - states: enum[
        Incoming,
        WaitingForCare,
        UnderCare,
        Medication,
        Surgery,
        Critical,
        Stable,
        Recovering,
        Recovered,
        Released,
        Adopted,
        Deceased
      ]
    - diagnosis?: string
    - procedure?: string
    - notes?: string
    - updatedBy: string
    - createdAt: string

  methods:
    - updatestates()
    - updateDiagnosis()
    - updateProcedure()
    - appendNotes()

```

```yaml
CampaignOperation:
  key_fields:
    - id: string
  attributes:
    - reports: array[
	    {
		    - report_id: string
		    - profile_id: string
		    - assignedDate: string
	    }
    ]
    - organization_id: array[string]
    - team_id: array[string]
    - name: string
    - description: string
    - amountTarget: int
    - amountCurrent: int
    - goal?: int
    - distribution?: string
    - donationLink?: string
    - states: enum[draft, active, completed, cancelled]
    - dateStart: string
    - dateEnd: string
    - createdAt: string
    - updatedAt?: string
  methods:
    - updateOrganizationTeam()
    - updateAmountTarget()
    - updateAmountCurrent()
```

| Field | Meaning | Constraints / Allowed Values | App Validation |
| --- | --- | --- | --- |
| `states` | Current stage of campaign operation | enum `[draft, active, completed, cancelled]` | only admins can update |
| `amountTarget` | Goal amount for campaign | int | required |
| `amountCurrent` | Collected amount | int | auto-calculated / updated |
| `goal` | Optional secondary goal | int | optional |
| `distribution` | Optional distribution info | string | optional |
| `donationLink` | Optional link for donations | string | URL format |
| `report_id` | Linked reports | array[string], FK → Report.id | optional |
| `organizationteam_id` | Teams responsible | array[string], FK → Team.id | required |
| participants | Profiles / Users part of the operation | array[objs] | required |

```yaml
Donation:
  key_fields:
    - id: string
  attributes:
    - amount: int
    - createdAt: string
    - profile_id: string
    - campaignoperation_id: string
```

| Field | Meaning | Constraints / Allowed Values | App Validation |
| --- | --- | --- | --- |
| `amount` | Donation amount | int, required | — |
| `profile_id` | Donor profile | FK → Profile.id | required |
| `campaignoperation_id` | Linked campaign operation | FK → CampaignOperation.id | required |

```yaml
Incident:
  key_fields:
    - id: string
  attributes:
    - createdAt: string
    - updatedAt?: string
    - fill_date: string
    - species: string
    - address_country: string
    - address_area?: string
    - address_city?: string
    - address_block?: string
    - address_buildingroom?: string
    - location_details: string
    - description: string
    - states: enum[new, under_review, validated, closed, deleted]
    - prprofile_id?: string
    - personInfo?: object
        - name: string
        - phone?: string
        - email?: string
    - report_id?: string
  methods:
    - updatestates()
```

| Field | Meaning | Constraints / Allowed Values | App Validation |
| --- | --- | --- | --- |
| `urgency` | Severity of the incident | enum `[pending_evaluation, low, medium, high, critical]` | Set by admin only |
| `states` | Incident lifecycle stage | enum `[new, under_review, validated, closed, deleted]` | Admin-controlled |
| `profile_id` | Linked registered person | FK → Profile.id (optional) | optional if reporter is unregistered |
| `personInfo` | Reporter info (unregistered) | object `{name, phone?, email?}` | required if `profile_id` is not provided |
| `report_id` | Linked report | FK → Report.id (optional) | — |

```yaml
Comment:
  key_fields:
    - id: string
  attributes:
    - text: string
    - user_id: string
    - target_type: enum[incident, report, operation]
    - target_id: string
    - createdAt: string
    - updatedAt?: string
  methods: 
	  - updateText()
```

| Field | Meaning | Constraints / Allowed Values | App Validation |
| --- | --- | --- | --- |
| `user_id` | Author of the comment | FK → Profile.id | required |
| `target_type` | Type of object commented on | enum `[incident, report, operation]` | required |
| `target_id` | Linked object ID | string | required |

```yaml
Report:
  key_fields:
    - id: string
  attributes:
    - subject: [enum[animal_rescue, medical_case, disaster, other]]
    - description: string
    - urgency: enum[pending_evaluation, low, medium, high, critical]   # defined by admin later
    - states: enum[draft, submitted, reviewed, resolved]
    - createdAt: string
    - updatedAt?: string
    - primaryProfile_id: [string],
	  - organizationteam_id?: string
    - incident_id?: [string]
    - medicaloperation_id?: [string]
    - fieldoperation_id?: [string]
    - campaignoperation_id?: [string]
  methods:
    - updateUrgency()
    - updatestates()
		- updateIncidentId()
    - updateOrganizationTeam()
    - updateFieldOperationId()
    - updateMedicalOperationId() 
    - updateCampaignOperationId()
```

| Field | Meaning | Constraints / Allowed Values | App Validation |
| --- | --- | --- | --- |
| `subject` | Report category | enum `[animal_rescue, medical_case, disaster, other]` | required |
| `states` | Report workflow stage | enum `[draft, submitted, reviewed, resolved]` | only certain roles can update |
| `organizationteam_id` | Team responsible | FK → Team.id (optional) | — |
| `incident_id` | Linked incident | array[string], FK → Incident.id | optional |
| `medicaloperation_id` | Linked medical operations | array[string], FK → MedicalOperation.id | optional |
| `fieldoperation_id` | Linked field operations | array[string], FK → FieldOperation.id | optional |
| `campaignoperation_id` | Linked campaign operations | array[string], FK → Campaign.id | optional |
| primaryprofile_id | Profiles responsible | array[string], FK → Profile.id | required |

```yaml
MasterReport:
  key_fields:
    - id: string
  attributes:
    - report_id: array[string]
    - organization_id: array[string]
    - team_id: array[string]
    - primaryprofile_id: array[string]
    - title?: string
    - description?: string
    - states: enum[draft, compiled, verified, archived]
    - createdAt: string
    - updatedAt?: string
    - medicaloperation_id?: [string]
    - fieldoperation_id?: [string]
    - campaignoperation_id?: [string]
  methods:
    - addReport()
    - removeReport()
    - updateReport()
    - updatestates()
    - updatePrimaryProfile()
    - updateOrganizationTeam()
    - updateFieldOperationId()
    - updateMedicalOperationId() 
    - updateCampaignOperationId()
```

| Field | Meaning | Constraints / Allowed Values | App Validation |
| --- | --- | --- | --- |
| `report_id` | Linked reports | array[string], FK → Report.id | required |
| `organizationteam_id` | Responsible teams | array[string], FK → Team.id | required |
| `primaryprofile_id` | Profiles responsible | array[string], FK → Profile.id | required |
| `states` | Workflow stage | enum `[draft, compiled, verified, archived]` | only authorized users can update |
| `medicaloperation_id` | Linked medical operations | array[string], FK → MedicalOperation.id | optional |
| `fieldoperation_id` | Linked field operations | array[string], FK → FieldOperation.id | optional |
| `campaignoperation_id` | Linked campaign operations | array[string], FK → CampaignOperation.id | optional |

```yaml
MegaReport:
  key_fields:
    - id: string
  attributes:
    - masterReportIds: array[string]
    - title: string
    - description?: string
    - states: enum[draft, compiled, verified, archived]
    - subject: [enum[animal_data, medical_case, disaster, other]]
    - createdAt: string
    - updatedAt?: string
  methods:
    - addMasterReport()
    - removeMasterReport()
    - changestates()
```

| Field | Meaning | Constraints / Allowed Values | App Validation |
| --- | --- | --- | --- |
| `masterReportIds` | Linked MasterReports | array[string], FK → MasterReport.id | required |
| `states` | Workflow stage | enum `[draft, compiled, verified, archived]` | only authorized users can update |
| `subject` | Type of mega report | enum `[animal_data, medical_case, disaster, other]` | required |