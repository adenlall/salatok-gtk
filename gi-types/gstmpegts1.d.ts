/**
 * GstMpegts 1.0
 *
 * Generated from 1.0
 */

import * as Gst from "gst1";
import * as GObject from "gobject2";
import * as GLib from "glib2";

export function descriptor_from_custom(tag: number, data: Uint8Array | string): Descriptor;
export function descriptor_from_custom_with_extension(
    tag: number,
    tag_extension: number,
    data: Uint8Array | string
): Descriptor;
export function descriptor_from_dvb_network_name(name: string): Descriptor;
export function descriptor_from_dvb_service(
    service_type: DVBServiceType,
    service_name?: string | null,
    service_provider?: string | null
): Descriptor;
export function descriptor_from_dvb_subtitling(
    lang: string,
    type: number,
    composition: number,
    ancillary: number
): Descriptor;
export function descriptor_from_iso_639_language(language: string): Descriptor;
export function descriptor_from_registration(
    format_identifier: string,
    additional_info?: Uint8Array | null
): Descriptor;
export function descriptor_parse_audio_preselection_dump(source: AudioPreselectionDescriptor): void;
export function descriptor_parse_audio_preselection_free(source: AudioPreselectionDescriptor): void;
export function dvb_component_descriptor_free(source: ComponentDescriptor): void;
export function event_new_mpegts_section(section: Section): Gst.Event;
export function event_parse_mpegts_section(event: Gst.Event): Section;
export function find_descriptor(descriptors: Descriptor[], tag: number): Descriptor;
export function find_descriptor_with_extension(
    descriptors: Descriptor[],
    tag: number,
    tag_extension: number
): Descriptor;
export function initialize(): void;
export function message_new_mpegts_section(parent: Gst.Object, section: Section): Gst.Message;
export function message_parse_mpegts_section(message: Gst.Message): Section;
export function parse_descriptors(buffer: number, buf_len: number): Descriptor[];
export function pat_new(): PatProgram[];
export function scte_cancel_new(event_id: number): SCTESIT;
export function scte_null_new(): SCTESIT;
export function scte_splice_in_new(event_id: number, splice_time: Gst.ClockTime): SCTESIT;
export function scte_splice_out_new(event_id: number, splice_time: Gst.ClockTime, duration: Gst.ClockTime): SCTESIT;
export function section_from_atsc_mgt(mgt: AtscMGT): Section;
export function section_from_atsc_rrt(rrt: AtscRRT): Section;
export function section_from_atsc_stt(stt: AtscSTT): Section;
export function section_from_nit(nit: NIT): Section;
export function section_from_pat(programs: PatProgram[], ts_id: number): Section;
export function section_from_pmt(pmt: PMT, pid: number): Section;
export function section_from_scte_sit(sit: SCTESIT, pid: number): Section;
export function section_from_sdt(sdt: SDT): Section;
export type PacketizeFunc = (section: Section) => boolean;

export namespace ATSCDescriptorType {
    export const $gtype: GObject.GType<ATSCDescriptorType>;
}

export enum ATSCDescriptorType {
    STUFFING = 128,
    AC3 = 129,
    CAPTION_SERVICE = 134,
    CONTENT_ADVISORY = 135,
    EXTENDED_CHANNEL_NAME = 160,
    SERVICE_LOCATION = 161,
    TIME_SHIFTED_SERVICE = 162,
    COMPONENT_NAME = 163,
    DCC_DEPARTING_REQUEST = 168,
    DCC_ARRIVING_REQUEST = 169,
    REDISTRIBUTION_CONTROL = 170,
    GENRE = 171,
    PRIVATE_INFORMATION = 173,
    EAC3 = 204,
    ENHANCED_SIGNALING = 178,
    DATA_SERVICE = 164,
    PID_COUNT = 165,
    DOWNLOAD_DESCRIPTOR = 166,
    MULTIPROTOCOL_ENCAPSULATION = 167,
    MODULE_LINK = 180,
    CRC32 = 181,
    GROUP_LINK = 184,
}

export namespace ATSCStreamType {
    export const $gtype: GObject.GType<ATSCStreamType>;
}

export enum ATSCStreamType {
    DCII_VIDEO = 128,
    AUDIO_AC3 = 129,
    SUBTITLING = 130,
    ISOCH_DATA = 131,
    SIT = 134,
    AUDIO_EAC3 = 135,
    AUDIO_DTS_HD = 136,
}

export namespace AtscMGTTableType {
    export const $gtype: GObject.GType<AtscMGTTableType>;
}

export enum AtscMGTTableType {
    EIT0 = 256,
    EIT127 = 383,
    ETT0 = 512,
    ETT127 = 639,
}

export namespace CableOuterFECScheme {
    export const $gtype: GObject.GType<CableOuterFECScheme>;
}

export enum CableOuterFECScheme {
    UNDEFINED = 0,
    NONE = 1,
    RS_204_188 = 2,
}

export namespace ComponentStreamContent {
    export const $gtype: GObject.GType<ComponentStreamContent>;
}

export enum ComponentStreamContent {
    MPEG2_VIDEO = 1,
    MPEG1_LAYER2_AUDIO = 2,
    TELETEXT_OR_SUBTITLE = 3,
    AC_3 = 4,
    AVC = 5,
    AAC = 6,
    DTS = 7,
    SRM_CPCM = 8,
}

export namespace ContentNibbleHi {
    export const $gtype: GObject.GType<ContentNibbleHi>;
}

export enum ContentNibbleHi {
    MOVIE_DRAMA = 1,
    NEWS_CURRENT_AFFAIRS = 2,
    SHOW_GAME_SHOW = 3,
    SPORTS = 4,
    CHILDREN_YOUTH_PROGRAM = 5,
    MUSIC_BALLET_DANCE = 6,
    ARTS_CULTURE = 7,
    SOCIAL_POLITICAL_ECONOMICS = 8,
    EDUCATION_SCIENCE_FACTUAL = 9,
    LEISURE_HOBBIES = 10,
    SPECIAL_CHARACTERISTICS = 11,
}

export namespace DVBCodeRate {
    export const $gtype: GObject.GType<DVBCodeRate>;
}

export enum DVBCodeRate {
    NONE = 0,
    "1_2" = 1,
    "2_3" = 2,
    "3_4" = 3,
    "4_5" = 4,
    "5_6" = 5,
    "6_7" = 6,
    "7_8" = 7,
    "8_9" = 8,
    AUTO = 9,
    "3_5" = 10,
    "9_10" = 11,
    "2_5" = 12,
}

export namespace DVBDescriptorType {
    export const $gtype: GObject.GType<DVBDescriptorType>;
}

export enum DVBDescriptorType {
    NETWORK_NAME = 64,
    SERVICE_LIST = 65,
    STUFFING = 66,
    SATELLITE_DELIVERY_SYSTEM = 67,
    CABLE_DELIVERY_SYSTEM = 68,
    VBI_DATA = 69,
    VBI_TELETEXT = 70,
    BOUQUET_NAME = 71,
    SERVICE = 72,
    COUNTRY_AVAILABILITY = 73,
    LINKAGE = 74,
    NVOD_REFERENCE = 75,
    TIME_SHIFTED_SERVICE = 76,
    SHORT_EVENT = 77,
    EXTENDED_EVENT = 78,
    TIME_SHIFTED_EVENT = 79,
    COMPONENT = 80,
    MOSAIC = 81,
    STREAM_IDENTIFIER = 82,
    CA_IDENTIFIER = 83,
    CONTENT = 84,
    PARENTAL_RATING = 85,
    TELETEXT = 86,
    TELEPHONE = 87,
    LOCAL_TIME_OFFSET = 88,
    SUBTITLING = 89,
    TERRESTRIAL_DELIVERY_SYSTEM = 90,
    MULTILINGUAL_NETWORK_NAME = 91,
    MULTILINGUAL_BOUQUET_NAME = 92,
    MULTILINGUAL_SERVICE_NAME = 93,
    MULTILINGUAL_COMPONENT = 94,
    PRIVATE_DATA_SPECIFIER = 95,
    SERVICE_MOVE = 96,
    SHORT_SMOOTHING_BUFFER = 97,
    FREQUENCY_LIST = 98,
    PARTIAL_TRANSPORT_STREAM = 99,
    DATA_BROADCAST = 100,
    SCRAMBLING = 101,
    DATA_BROADCAST_ID = 102,
    TRANSPORT_STREAM = 103,
    DSNG = 104,
    PDC = 105,
    AC3 = 106,
    ANCILLARY_DATA = 107,
    CELL_LIST = 108,
    CELL_FREQUENCY_LINK = 109,
    ANNOUNCEMENT_SUPPORT = 110,
    APPLICATION_SIGNALLING = 111,
    ADAPTATION_FIELD_DATA = 112,
    SERVICE_IDENTIFIER = 113,
    SERVICE_AVAILABILITY = 114,
    DEFAULT_AUTHORITY = 115,
    RELATED_CONTENT = 116,
    TVA_ID = 117,
    CONTENT_IDENTIFIER = 118,
    TIMESLICE_FEC_IDENTIFIER = 119,
    ECM_REPETITION_RATE = 120,
    S2_SATELLITE_DELIVERY_SYSTEM = 121,
    ENHANCED_AC3 = 122,
    DTS = 123,
    AAC = 124,
    XAIT_LOCATION = 125,
    FTA_CONTENT_MANAGEMENT = 126,
    EXTENSION = 127,
}

export namespace DVBExtendedDescriptorType {
    export const $gtype: GObject.GType<DVBExtendedDescriptorType>;
}

export enum DVBExtendedDescriptorType {
    IMAGE_ICON = 0,
    CPCM_DELIVERY_SIGNALLING = 1,
    CP = 2,
    CP_IDENTIFIER = 3,
    T2_DELIVERY_SYSTEM = 4,
    SH_DELIVERY_SYSTEM = 5,
    SUPPLEMENTARY_AUDIO = 6,
    NETWORK_CHANGE_NOTIFY = 7,
    MESSAGE = 8,
    TARGET_REGION = 9,
    TARGET_REGION_NAME = 10,
    SERVICE_RELOCATED = 11,
    XAIT_PID = 12,
    C2_DELIVERY_SYSTEM = 13,
    DTS_HD_AUDIO_STREAM = 14,
    DTS_NEUTRAL = 15,
    VIDEO_DEPTH_RANGE = 16,
    T2MI = 17,
    URI_LINKAGE = 19,
    AC4 = 21,
    AUDIO_PRESELECTION = 25,
}

export namespace DVBLinkageHandOverType {
    export const $gtype: GObject.GType<DVBLinkageHandOverType>;
}

export enum DVBLinkageHandOverType {
    RESERVED = 0,
    IDENTICAL = 1,
    LOCAL_VARIATION = 2,
    ASSOCIATED = 3,
}

export namespace DVBLinkageType {
    export const $gtype: GObject.GType<DVBLinkageType>;
}

export enum DVBLinkageType {
    RESERVED_00 = 0,
    INFORMATION = 1,
    EPG = 2,
    CA_REPLACEMENT = 3,
    TS_CONTAINING_COMPLETE_SI = 4,
    SERVICE_REPLACEMENT = 5,
    DATA_BROADCAST = 6,
    RCS_MAP = 7,
    MOBILE_HAND_OVER = 8,
    SYSTEM_SOFTWARE_UPDATE = 9,
    TS_CONTAINING_SSU = 10,
    IP_MAC_NOTIFICATION = 11,
    TS_CONTAINING_INT = 12,
    EVENT = 13,
    EXTENDED_EVENT = 14,
}

export namespace DVBScramblingModeType {
    export const $gtype: GObject.GType<DVBScramblingModeType>;
}

export enum DVBScramblingModeType {
    RESERVED = 0,
    CSA1 = 1,
    CSA2 = 2,
    CSA3_STANDARD = 3,
    CSA3_MINIMAL_ENHANCED = 4,
    CSA3_FULL_ENHANCED = 5,
    CISSA = 16,
    ATIS_0 = 112,
    ATIS_F = 127,
}

export namespace DVBServiceType {
    export const $gtype: GObject.GType<DVBServiceType>;
}

export enum DVBServiceType {
    RESERVED_00 = 0,
    DIGITAL_TELEVISION = 1,
    DIGITAL_RADIO_SOUND = 2,
    TELETEXT = 3,
    NVOD_REFERENCE = 4,
    NVOD_TIME_SHIFTED = 5,
    MOSAIC = 6,
    FM_RADIO = 7,
    DVB_SRM = 8,
    RESERVED_09 = 9,
    ADVANCED_CODEC_DIGITAL_RADIO_SOUND = 10,
    ADVANCED_CODEC_MOSAIC = 11,
    DATA_BROADCAST = 12,
    RESERVED_0D_COMMON_INTERFACE = 13,
    RCS_MAP = 14,
    RCS_FLS = 15,
    DVB_MHP = 16,
    MPEG2_HD_DIGITAL_TELEVISION = 17,
    ADVANCED_CODEC_SD_DIGITAL_TELEVISION = 22,
    ADVANCED_CODEC_SD_NVOD_TIME_SHIFTED = 23,
    ADVANCED_CODEC_SD_NVOD_REFERENCE = 24,
    ADVANCED_CODEC_HD_DIGITAL_TELEVISION = 25,
    ADVANCED_CODEC_HD_NVOD_TIME_SHIFTED = 26,
    ADVANCED_CODEC_HD_NVOD_REFERENCE = 27,
    ADVANCED_CODEC_STEREO_HD_DIGITAL_TELEVISION = 28,
    ADVANCED_CODEC_STEREO_HD_NVOD_TIME_SHIFTED = 29,
    ADVANCED_CODEC_STEREO_HD_NVOD_REFERENCE = 30,
    RESERVED_FF = 31,
}

export namespace DVBTeletextType {
    export const $gtype: GObject.GType<DVBTeletextType>;
}

export enum DVBTeletextType {
    NITIAL_PAGE = 1,
    UBTITLE_PAGE = 2,
    DDITIONAL_INFO_PAGE = 3,
    ROGRAMME_SCHEDULE_PAGE = 4,
    EARING_IMPAIRED_PAGE = 5,
}

export namespace DescriptorType {
    export const $gtype: GObject.GType<DescriptorType>;
}

export enum DescriptorType {
    RESERVED_00 = 0,
    RESERVED_01 = 1,
    VIDEO_STREAM = 2,
    AUDIO_STREAM = 3,
    HIERARCHY = 4,
    REGISTRATION = 5,
    DATA_STREAM_ALIGNMENT = 6,
    TARGET_BACKGROUND_GRID = 7,
    VIDEO_WINDOW = 8,
    CA = 9,
    ISO_639_LANGUAGE = 10,
    SYSTEM_CLOCK = 11,
    MULTIPLEX_BUFFER_UTILISATION = 12,
    COPYRIGHT = 13,
    MAXIMUM_BITRATE = 14,
    PRIVATE_DATA_INDICATOR = 15,
    SMOOTHING_BUFFER = 16,
    STD = 17,
    IBP = 18,
    DSMCC_CAROUSEL_IDENTIFIER = 19,
    DSMCC_ASSOCIATION_TAG = 20,
    DSMCC_DEFERRED_ASSOCIATION_TAG = 21,
    DSMCC_NPT_REFERENCE = 23,
    DSMCC_NPT_ENDPOINT = 24,
    DSMCC_STREAM_MODE = 25,
    DSMCC_STREAM_EVENT = 26,
    MPEG4_VIDEO = 27,
    MPEG4_AUDIO = 28,
    IOD = 29,
    SL = 30,
    FMC = 31,
    EXTERNAL_ES_ID = 32,
    MUX_CODE = 33,
    FMX_BUFFER_SIZE = 34,
    MULTIPLEX_BUFFER = 35,
    CONTENT_LABELING = 36,
    METADATA_POINTER = 37,
    METADATA = 38,
    METADATA_STD = 39,
    AVC_VIDEO = 40,
    IPMP = 41,
    AVC_TIMING_AND_HRD = 42,
    MPEG2_AAC_AUDIO = 43,
    FLEX_MUX_TIMING = 44,
    MPEG4_TEXT = 45,
    MPEG4_AUDIO_EXTENSION = 46,
    AUXILIARY_VIDEO_STREAM = 47,
    SVC_EXTENSION = 48,
    MVC_EXTENSION = 49,
    J2K_VIDEO = 50,
    MVC_OPERATION_POINT = 51,
    MPEG2_STEREOSCOPIC_VIDEO_FORMAT = 52,
    STEREOSCOPIC_PROGRAM_INFO = 53,
    STEREOSCOPIC_VIDEO_INFO = 54,
}

export namespace HdmvStreamType {
    export const $gtype: GObject.GType<HdmvStreamType>;
}

export enum HdmvStreamType {
    AUDIO_LPCM = 128,
    AUDIO_AC3 = 129,
    AUDIO_DTS = 130,
    AUDIO_AC3_TRUE_HD = 131,
    AUDIO_AC3_PLUS = 132,
    AUDIO_DTS_HD = 133,
    AUDIO_DTS_HD_MASTER_AUDIO = 134,
    AUDIO_EAC3 = 135,
    SUBPICTURE_PGS = 144,
    IGS = 145,
    SUBTITLE = 146,
    AUDIO_AC3_PLUS_SECONDARY = 161,
    AUDIO_DTS_HD_SECONDARY = 162,
}

export namespace ISDBDescriptorType {
    export const $gtype: GObject.GType<ISDBDescriptorType>;
}

export enum ISDBDescriptorType {
    HIERARCHICAL_TRANSMISSION = 192,
    DIGITAL_COPY_CONTROL = 193,
    NETWORK_IDENTIFICATION = 194,
    PARTIAL_TS_TIME = 195,
    AUDIO_COMPONENT = 196,
    HYPERLINK = 197,
    TARGET_REGION = 198,
    DATA_CONTENT = 199,
    VIDEO_DECODE_CONTROL = 200,
    DOWNLOAD_CONTENT = 201,
    CA_EMM_TS = 202,
    CA_CONTRACT_INFORMATION = 203,
    CA_SERVICE = 204,
    TS_INFORMATION = 205,
    EXTENDED_BROADCASTER = 206,
    LOGO_TRANSMISSION = 207,
    BASIC_LOCAL_EVENT = 208,
    REFERENCE = 209,
    NODE_RELATION = 210,
    SHORT_NODE_INFORMATION = 211,
    STC_REFERENCE = 212,
    SERIES = 213,
    EVENT_GROUP = 214,
    SI_PARAMETER = 215,
    BROADCASTER_NAME = 216,
    COMPONENT_GROUP = 217,
    SI_PRIME_TS = 218,
    BOARD_INFORMATION = 219,
    LDT_LINKAGE = 220,
    CONNECTED_TRANSMISSION = 221,
    CONTENT_AVAILABILITY = 222,
    SERVICE_GROUP = 224,
}

export namespace Iso639AudioType {
    export const $gtype: GObject.GType<Iso639AudioType>;
}

export enum Iso639AudioType {
    UNDEFINED = 0,
    CLEAN_EFFECTS = 1,
    HEARING_IMPAIRED = 2,
    VISUAL_IMPAIRED_COMMENTARY = 3,
}

export namespace MiscDescriptorType {
    export const $gtype: GObject.GType<MiscDescriptorType>;
}

export enum MiscDescriptorType {
    MTS_DESC_DTG_LOGICAL_CHANNEL = 131,
}

export namespace ModulationType {
    export const $gtype: GObject.GType<ModulationType>;
}

export enum ModulationType {
    QPSK = 0,
    QAM_16 = 1,
    QAM_32 = 2,
    QAM_64 = 3,
    QAM_128 = 4,
    QAM_256 = 5,
    QAM_AUTO = 6,
    VSB_8 = 7,
    VSB_16 = 8,
    PSK_8 = 9,
    APSK_16 = 10,
    APSK_32 = 11,
    DQPSK = 12,
    QAM_4_NR_ = 13,
    NONE = 14,
}

export namespace RunningStatus {
    export const $gtype: GObject.GType<RunningStatus>;
}

export enum RunningStatus {
    UNDEFINED = 0,
    NOT_RUNNING = 1,
    STARTS_IN_FEW_SECONDS = 2,
    PAUSING = 3,
    RUNNING = 4,
    OFF_AIR = 5,
}

export namespace SCTEDescriptorType {
    export const $gtype: GObject.GType<SCTEDescriptorType>;
}

export enum SCTEDescriptorType {
    STUFFING = 128,
    AC3 = 129,
    FRAME_RATE = 130,
    EXTENDED_VIDEO = 131,
    COMPONENT_NAME = 132,
    FREQUENCY_SPEC = 144,
    MODULATION_PARAMS = 145,
    TRANSPORT_STREAM_ID = 146,
}

export namespace SCTESpliceCommandType {
    export const $gtype: GObject.GType<SCTESpliceCommandType>;
}

export enum SCTESpliceCommandType {
    NULL = 0,
    SCHEDULE = 4,
    INSERT = 5,
    TIME = 6,
    BANDWIDTH = 7,
    PRIVATE = 255,
}

export namespace SCTESpliceDescriptor {
    export const $gtype: GObject.GType<SCTESpliceDescriptor>;
}

export enum SCTESpliceDescriptor {
    AVAIL = 0,
    DTMF = 1,
    SEGMENTATION = 2,
    TIME = 3,
    AUDIO = 4,
}

export namespace SatellitePolarizationType {
    export const $gtype: GObject.GType<SatellitePolarizationType>;
}

export enum SatellitePolarizationType {
    LINEAR_HORIZONTAL = 0,
    LINEAR_VERTICAL = 1,
    CIRCULAR_LEFT = 2,
    CIRCULAR_RIGHT = 3,
}

export class SatelliteRolloff {
    static $gtype: GObject.GType<SatelliteRolloff>;

    constructor(copy: SatelliteRolloff);

    // Fields
    static "35": number;
    static "20": number;
    static "25": number;
    static RESERVED: number;
    static AUTO: number;
}

export namespace ScteStreamType {
    export const $gtype: GObject.GType<ScteStreamType>;
}

export enum ScteStreamType {
    SUBTITLING = 130,
    ISOCH_DATA = 131,
    SIT = 134,
    DST_NRT = 149,
    DSMCC_DCB = 176,
    SIGNALING = 192,
    SYNC_DATA = 194,
    ASYNC_DATA = 195,
}

export namespace SectionATSCTableID {
    export const $gtype: GObject.GType<SectionATSCTableID>;
}

export enum SectionATSCTableID {
    MASTER_GUIDE = 199,
    TERRESTRIAL_VIRTUAL_CHANNEL = 200,
    CABLE_VIRTUAL_CHANNEL = 201,
    RATING_REGION = 202,
    EVENT_INFORMATION = 203,
    CHANNEL_OR_EVENT_EXTENDED_TEXT = 204,
    SYSTEM_TIME = 205,
    DATA_EVENT = 206,
    DATA_SERVICE = 207,
    PROGRAM_IDENTIFIER = 208,
    NETWORK_RESOURCE = 209,
    LONG_TERM_SERVICE = 210,
    DIRECTED_CHANNEL_CHANGE = 211,
    DIRECTED_CHANNEL_CHANGE_SECTION_CODE = 212,
    AGGREGATE_EVENT_INFORMATION = 214,
    AGGREGATE_EXTENDED_TEXT = 215,
    AGGREGATE_DATA_EVENT = 217,
    SATELLITE_VIRTUAL_CHANNEL = 218,
}

export namespace SectionDVBTableID {
    export const $gtype: GObject.GType<SectionDVBTableID>;
}

export enum SectionDVBTableID {
    NETWORK_INFORMATION_ACTUAL_NETWORK = 64,
    NETWORK_INFORMATION_OTHER_NETWORK = 65,
    SERVICE_DESCRIPTION_ACTUAL_TS = 66,
    SERVICE_DESCRIPTION_OTHER_TS = 70,
    BOUQUET_ASSOCIATION = 74,
    UPDATE_NOTIFICATION = 75,
    DOWNLOADABLE_FONT_INFO = 76,
    EVENT_INFORMATION_ACTUAL_TS_PRESENT = 78,
    EVENT_INFORMATION_OTHER_TS_PRESENT = 79,
    EVENT_INFORMATION_ACTUAL_TS_SCHEDULE_1 = 80,
    EVENT_INFORMATION_ACTUAL_TS_SCHEDULE_N = 95,
    EVENT_INFORMATION_OTHER_TS_SCHEDULE_1 = 96,
    EVENT_INFORMATION_OTHER_TS_SCHEDULE_N = 111,
    TIME_DATE = 112,
    RUNNING_STATUS = 113,
    STUFFING = 114,
    TIME_OFFSET = 115,
    APPLICATION_INFORMATION_TABLE = 116,
    CONTAINER = 117,
    RELATED_CONTENT = 118,
    CONTENT_IDENTIFIER = 119,
    MPE_FEC = 120,
    RESOLUTION_NOTIFICATION = 121,
    MPE_IFEC = 122,
    PROTECTION_MESSAGE = 123,
    DISCONTINUITY_INFORMATION = 126,
    SELECTION_INFORMATION = 127,
    CA_MESSAGE_ECM_0 = 128,
    CA_MESSAGE_ECM_1 = 129,
    CA_MESSAGE_SYSTEM_PRIVATE_1 = 130,
    CA_MESSAGE_SYSTEM_PRIVATE_N = 143,
    SCT = 160,
    FCT = 161,
    TCT = 162,
    SPT = 163,
    CMT = 164,
    TBTP = 165,
    PCR_PACKET_PAYLOAD = 166,
    TRANSMISSION_MODE_SUPPORT_PAYLOAD = 170,
    TIM = 176,
    LL_FEC_PARITY_DATA_TABLE = 177,
}

export namespace SectionSCTETableID {
    export const $gtype: GObject.GType<SectionSCTETableID>;
}

export enum SectionSCTETableID {
    EAS = 216,
    EBIF = 224,
    RESERVED = 225,
    EISS = 226,
    DII = 227,
    DDB = 228,
    SPLICE = 252,
}

export namespace SectionTableID {
    export const $gtype: GObject.GType<SectionTableID>;
}

export enum SectionTableID {
    PROGRAM_ASSOCIATION = 0,
    CONDITIONAL_ACCESS = 1,
    TS_PROGRAM_MAP = 2,
    TS_DESCRIPTION = 3,
    "14496_SCENE_DESCRIPTION" = 4,
    "14496_OBJET_DESCRIPTOR" = 5,
    METADATA = 6,
    IPMP_CONTROL_INFORMATION = 7,
    "14496_SECTION" = 8,
    "23001_11_SECTION" = 9,
    "23001_10_SECTION" = 10,
    DSM_CC_MULTIPROTO_ENCAPSULATED_DATA = 58,
    DSM_CC_U_N_MESSAGES = 59,
    DSM_CC_DOWNLOAD_DATA_MESSAGES = 60,
    DSM_CC_STREAM_DESCRIPTORS = 61,
    DSM_CC_PRIVATE_DATA = 62,
    DSM_CC_ADDRESSABLE_SECTIONS = 63,
    UNSET = 255,
}

export namespace SectionType {
    export const $gtype: GObject.GType<SectionType>;
}

export enum SectionType {
    UNKNOWN = 0,
    PAT = 1,
    PMT = 2,
    CAT = 3,
    TSDT = 4,
    EIT = 5,
    NIT = 6,
    BAT = 7,
    SDT = 8,
    TDT = 9,
    TOT = 10,
    SIT = 11,
    ATSC_TVCT = 12,
    ATSC_CVCT = 13,
    ATSC_MGT = 14,
    ATSC_ETT = 15,
    ATSC_EIT = 16,
    ATSC_STT = 17,
    ATSC_RRT = 18,
    SCTE_SIT = 19,
}

export namespace StreamType {
    export const $gtype: GObject.GType<StreamType>;
}

export enum StreamType {
    RESERVED_00 = 0,
    VIDEO_MPEG1 = 1,
    VIDEO_MPEG2 = 2,
    AUDIO_MPEG1 = 3,
    AUDIO_MPEG2 = 4,
    PRIVATE_SECTIONS = 5,
    PRIVATE_PES_PACKETS = 6,
    MHEG = 7,
    DSM_CC = 8,
    H_222_1 = 9,
    DSMCC_A = 10,
    DSMCC_B = 11,
    DSMCC_C = 12,
    DSMCC_D = 13,
    AUXILIARY = 14,
    AUDIO_AAC_ADTS = 15,
    VIDEO_MPEG4 = 16,
    AUDIO_AAC_LATM = 17,
    SL_FLEXMUX_PES_PACKETS = 18,
    SL_FLEXMUX_SECTIONS = 19,
    SYNCHRONIZED_DOWNLOAD = 20,
    METADATA_PES_PACKETS = 21,
    METADATA_SECTIONS = 22,
    METADATA_DATA_CAROUSEL = 23,
    METADATA_OBJECT_CAROUSEL = 24,
    METADATA_SYNCHRONIZED_DOWNLOAD = 25,
    MPEG2_IPMP = 26,
    VIDEO_H264 = 27,
    AUDIO_AAC_CLEAN = 28,
    MPEG4_TIMED_TEXT = 29,
    VIDEO_RVC = 30,
    VIDEO_H264_SVC_SUB_BITSTREAM = 31,
    VIDEO_H264_MVC_SUB_BITSTREAM = 32,
    VIDEO_JP2K = 33,
    VIDEO_MPEG2_STEREO_ADDITIONAL_VIEW = 34,
    VIDEO_H264_STEREO_ADDITIONAL_VIEW = 35,
    VIDEO_HEVC = 36,
    IPMP_STREAM = 127,
    USER_PRIVATE_EA = 234,
}

export namespace TerrestrialGuardInterval {
    export const $gtype: GObject.GType<TerrestrialGuardInterval>;
}

export enum TerrestrialGuardInterval {
    "1_32" = 0,
    "1_16" = 1,
    "1_8" = 2,
    "1_4" = 3,
    AUTO = 4,
    "1_128" = 5,
    "19_128" = 6,
    "19_256" = 7,
    PN420 = 8,
    PN595 = 9,
    PN945 = 10,
}

export class TerrestrialHierarchy {
    static $gtype: GObject.GType<TerrestrialHierarchy>;

    constructor(copy: TerrestrialHierarchy);

    // Fields
    static NONE: number;
    static "1": number;
    static "2": number;
    static "4": number;
    static AUTO: number;
}

export namespace TerrestrialTransmissionMode {
    export const $gtype: GObject.GType<TerrestrialTransmissionMode>;
}

export enum TerrestrialTransmissionMode {
    "2K" = 0,
    "8K" = 1,
    AUTO = 2,
    "4K" = 3,
    "1K" = 4,
    "16K" = 5,
    "32K" = 6,
    C1 = 7,
    C3780 = 8,
}

export class RegistrationId {
    static $gtype: GObject.GType<RegistrationId>;

    constructor(copy: RegistrationId);

    // Fields
    static "0": number;
    static AC_3: number;
    static CUEI: number;
    static DRAC: number;
    static DTS1: number;
    static DTS2: number;
    static DTS3: number;
    static BSSD: number;
    static EAC3: number;
    static ETV1: number;
    static GA94: number;
    static HDMV: number;
    static KLVA: number;
    static OPUS: number;
    static TSHV: number;
    static VC_1: number;
    static AC_4: number;
    static OTHER_HEVC: number;
}

export class AtscEIT {
    static $gtype: GObject.GType<AtscEIT>;

    constructor(copy: AtscEIT);

    // Fields
    source_id: number;
    protocol_version: number;
    events: AtscEITEvent[];
}

export class AtscEITEvent {
    static $gtype: GObject.GType<AtscEITEvent>;

    constructor(copy: AtscEITEvent);

    // Fields
    event_id: number;
    start_time: number;
    etm_location: number;
    length_in_seconds: number;
    titles: AtscMultString[];
    descriptors: Descriptor[];
}

export class AtscETT {
    static $gtype: GObject.GType<AtscETT>;

    constructor(copy: AtscETT);

    // Fields
    ett_table_id_extension: number;
    protocol_version: number;
    etm_id: number;
    messages: AtscMultString[];
}

export class AtscMGT {
    static $gtype: GObject.GType<AtscMGT>;

    constructor();
    constructor(
        properties?: Partial<{
            protocol_version?: number;
            tables_defined?: number;
            tables?: AtscMGTTable[];
            descriptors?: Descriptor[];
        }>
    );
    constructor(copy: AtscMGT);

    // Fields
    protocol_version: number;
    tables_defined: number;
    tables: AtscMGTTable[];
    descriptors: Descriptor[];

    // Constructors
    static ["new"](): AtscMGT;
}

export class AtscMGTTable {
    static $gtype: GObject.GType<AtscMGTTable>;

    constructor(copy: AtscMGTTable);

    // Fields
    table_type: number;
    pid: number;
    version_number: number;
    number_bytes: number;
    descriptors: Descriptor[];
}

export class AtscMultString {
    static $gtype: GObject.GType<AtscMultString>;

    constructor(copy: AtscMultString);

    // Fields
    iso_639_langcode: number[];
    segments: AtscStringSegment[];
}

export class AtscRRT {
    static $gtype: GObject.GType<AtscRRT>;

    constructor();
    constructor(
        properties?: Partial<{
            protocol_version?: number;
            names?: AtscMultString[];
            dimensions_defined?: number;
            dimensions?: AtscRRTDimension[];
            descriptors?: any[];
        }>
    );
    constructor(copy: AtscRRT);

    // Fields
    protocol_version: number;
    names: AtscMultString[];
    dimensions_defined: number;
    dimensions: AtscRRTDimension[];
    descriptors: any[];

    // Constructors
    static ["new"](): AtscRRT;
}

export class AtscRRTDimension {
    static $gtype: GObject.GType<AtscRRTDimension>;

    constructor();
    constructor(
        properties?: Partial<{
            names?: AtscMultString[];
            graduated_scale?: boolean;
            values_defined?: number;
            values?: AtscRRTDimensionValue[];
        }>
    );
    constructor(copy: AtscRRTDimension);

    // Fields
    names: AtscMultString[];
    graduated_scale: boolean;
    values_defined: number;
    values: AtscRRTDimensionValue[];

    // Constructors
    static ["new"](): AtscRRTDimension;
}

export class AtscRRTDimensionValue {
    static $gtype: GObject.GType<AtscRRTDimensionValue>;

    constructor();
    constructor(
        properties?: Partial<{
            abbrev_ratings?: AtscMultString[];
            ratings?: AtscMultString[];
        }>
    );
    constructor(copy: AtscRRTDimensionValue);

    // Fields
    abbrev_ratings: AtscMultString[];
    ratings: AtscMultString[];

    // Constructors
    static ["new"](): AtscRRTDimensionValue;
}

export class AtscSTT {
    static $gtype: GObject.GType<AtscSTT>;

    constructor();
    constructor(
        properties?: Partial<{
            protocol_version?: number;
            system_time?: number;
            gps_utc_offset?: number;
            ds_status?: boolean;
            ds_dayofmonth?: number;
            ds_hour?: number;
            descriptors?: Descriptor[];
            utc_datetime?: Gst.DateTime;
        }>
    );
    constructor(copy: AtscSTT);

    // Fields
    protocol_version: number;
    system_time: number;
    gps_utc_offset: number;
    ds_status: boolean;
    ds_dayofmonth: number;
    ds_hour: number;
    descriptors: Descriptor[];
    utc_datetime: Gst.DateTime;

    // Constructors
    static ["new"](): AtscSTT;

    // Members
    get_datetime_utc(): Gst.DateTime;
}

export class AtscStringSegment {
    static $gtype: GObject.GType<AtscStringSegment>;

    constructor(
        properties?: Partial<{
            compression_type?: number;
            mode?: number;
            compressed_data_size?: number;
            compressed_data?: number;
            cached_string?: string;
        }>
    );
    constructor(copy: AtscStringSegment);

    // Fields
    compression_type: number;
    mode: number;
    compressed_data_size: number;
    compressed_data: number;
    cached_string: string;

    // Members
    get_string(): string;
    set_string(string: string, compression_type: number, mode: number): boolean;
}

export class AtscVCT {
    static $gtype: GObject.GType<AtscVCT>;

    constructor(copy: AtscVCT);

    // Fields
    transport_stream_id: number;
    protocol_version: number;
    sources: AtscVCTSource[];
    descriptors: Descriptor[];
}

export class AtscVCTSource {
    static $gtype: GObject.GType<AtscVCTSource>;

    constructor(copy: AtscVCTSource);

    // Fields
    short_name: string;
    major_channel_number: number;
    minor_channel_number: number;
    modulation_mode: number;
    carrier_frequency: number;
    channel_TSID: number;
    program_number: number;
    ETM_location: number;
    access_controlled: boolean;
    hidden: boolean;
    path_select: boolean;
    out_of_band: boolean;
    hide_guide: boolean;
    service_type: number;
    source_id: number;
    descriptors: Descriptor[];
}

export class AudioPreselectionDescriptor {
    static $gtype: GObject.GType<AudioPreselectionDescriptor>;

    constructor(
        properties?: Partial<{
            preselection_id?: number;
            audio_rendering_indication?: number;
            audio_description?: boolean;
            spoken_subtitles?: boolean;
            dialogue_enhancement?: boolean;
            interactivity_enabled?: boolean;
            language_code_present?: boolean;
            text_label_present?: boolean;
            multi_stream_info_present?: boolean;
            future_extension?: boolean;
            language_code?: string;
            message_id?: number;
        }>
    );
    constructor(copy: AudioPreselectionDescriptor);

    // Fields
    preselection_id: number;
    audio_rendering_indication: number;
    audio_description: boolean;
    spoken_subtitles: boolean;
    dialogue_enhancement: boolean;
    interactivity_enabled: boolean;
    language_code_present: boolean;
    text_label_present: boolean;
    multi_stream_info_present: boolean;
    future_extension: boolean;
    language_code: string;
    message_id: number;
}

export class BAT {
    static $gtype: GObject.GType<BAT>;

    constructor(copy: BAT);

    // Fields
    descriptors: Descriptor[];
    streams: BATStream[];
}

export class BATStream {
    static $gtype: GObject.GType<BATStream>;

    constructor(copy: BATStream);

    // Fields
    transport_stream_id: number;
    original_network_id: number;
    descriptors: any[];
}

export class CableDeliverySystemDescriptor {
    static $gtype: GObject.GType<CableDeliverySystemDescriptor>;

    constructor(copy: CableDeliverySystemDescriptor);

    // Fields
    frequency: number;
    outer_fec: CableOuterFECScheme;
    modulation: ModulationType;
    symbol_rate: number;
    fec_inner: DVBCodeRate;

    // Members
    free(): void;
}

export class ComponentDescriptor {
    static $gtype: GObject.GType<ComponentDescriptor>;

    constructor(
        properties?: Partial<{
            stream_content?: number;
            component_type?: number;
            component_tag?: number;
            language_code?: string;
            text?: string;
        }>
    );
    constructor(copy: ComponentDescriptor);

    // Fields
    stream_content: number;
    component_type: number;
    component_tag: number;
    language_code: string;
    text: string;
}

export class Content {
    static $gtype: GObject.GType<Content>;

    constructor(copy: Content);

    // Fields
    content_nibble_1: ContentNibbleHi;
    content_nibble_2: number;
    user_byte: number;
}

export class DVBLinkageDescriptor {
    static $gtype: GObject.GType<DVBLinkageDescriptor>;

    constructor(copy: DVBLinkageDescriptor);

    // Fields
    transport_stream_id: number;
    original_network_id: number;
    service_id: number;
    linkage_type: DVBLinkageType;
    private_data_length: number;
    private_data_bytes: number;

    // Members
    free(): void;
    get_event(): DVBLinkageEvent;
    get_extended_event(): DVBLinkageExtendedEvent[];
    get_mobile_hand_over(): DVBLinkageMobileHandOver;
}

export class DVBLinkageEvent {
    static $gtype: GObject.GType<DVBLinkageEvent>;

    constructor(
        properties?: Partial<{
            target_event_id?: number;
            target_listed?: boolean;
            event_simulcast?: boolean;
        }>
    );
    constructor(copy: DVBLinkageEvent);

    // Fields
    target_event_id: number;
    target_listed: boolean;
    event_simulcast: boolean;
}

export class DVBLinkageExtendedEvent {
    static $gtype: GObject.GType<DVBLinkageExtendedEvent>;

    constructor(
        properties?: Partial<{
            target_event_id?: number;
            target_listed?: boolean;
            event_simulcast?: boolean;
            link_type?: number;
            target_id_type?: number;
            original_network_id_flag?: boolean;
            service_id_flag?: boolean;
            user_defined_id?: number;
            target_transport_stream_id?: number;
            target_original_network_id?: number;
            target_service_id?: number;
        }>
    );
    constructor(copy: DVBLinkageExtendedEvent);

    // Fields
    target_event_id: number;
    target_listed: boolean;
    event_simulcast: boolean;
    link_type: number;
    target_id_type: number;
    original_network_id_flag: boolean;
    service_id_flag: boolean;
    user_defined_id: number;
    target_transport_stream_id: number;
    target_original_network_id: number;
    target_service_id: number;
}

export class DVBLinkageMobileHandOver {
    static $gtype: GObject.GType<DVBLinkageMobileHandOver>;

    constructor(copy: DVBLinkageMobileHandOver);

    // Fields
    hand_over_type: DVBLinkageHandOverType;
    origin_type: boolean;
    network_id: number;
    initial_service_id: number;
}

export class DVBParentalRatingItem {
    static $gtype: GObject.GType<DVBParentalRatingItem>;

    constructor(
        properties?: Partial<{
            country_code?: string;
            rating?: number;
        }>
    );
    constructor(copy: DVBParentalRatingItem);

    // Fields
    country_code: string;
    rating: number;
}

export class DVBServiceListItem {
    static $gtype: GObject.GType<DVBServiceListItem>;

    constructor(copy: DVBServiceListItem);

    // Fields
    service_id: number;
    type: DVBServiceType;
}

export class DataBroadcastDescriptor {
    static $gtype: GObject.GType<DataBroadcastDescriptor>;

    constructor(
        properties?: Partial<{
            data_broadcast_id?: number;
            component_tag?: number;
            length?: number;
            selector_bytes?: number;
            language_code?: string;
            text?: string;
        }>
    );
    constructor(copy: DataBroadcastDescriptor);

    // Fields
    data_broadcast_id: number;
    component_tag: number;
    length: number;
    selector_bytes: number;
    language_code: string;
    text: string;

    // Members
    free(): void;
}

export class Descriptor {
    static $gtype: GObject.GType<Descriptor>;

    constructor(
        properties?: Partial<{
            tag?: number;
            tag_extension?: number;
            length?: number;
            data?: number;
        }>
    );
    constructor(copy: Descriptor);

    // Fields
    tag: number;
    tag_extension: number;
    length: number;
    data: number;

    // Members
    free(): void;
    parse_audio_preselection_list(): [boolean, AudioPreselectionDescriptor[]];
    parse_ca(): [boolean, number, number, Uint8Array | null];
    parse_cable_delivery_system(): [boolean, CableDeliverySystemDescriptor];
    parse_dvb_bouquet_name(): [boolean, string];
    parse_dvb_ca_identifier(): [boolean, number[]];
    parse_dvb_component(): [boolean, ComponentDescriptor];
    parse_dvb_content(): [boolean, Content[]];
    parse_dvb_data_broadcast(): [boolean, DataBroadcastDescriptor];
    parse_dvb_data_broadcast_id(): [boolean, number, Uint8Array];
    parse_dvb_extended_event(): [boolean, ExtendedEventDescriptor];
    parse_dvb_frequency_list(): [boolean, boolean, number[]];
    parse_dvb_linkage(): [boolean, DVBLinkageDescriptor];
    parse_dvb_multilingual_bouquet_name(): [boolean, DvbMultilingualBouquetNameItem[]];
    parse_dvb_multilingual_component(): [boolean, number, DvbMultilingualComponentItem[]];
    parse_dvb_multilingual_network_name(): [boolean, DvbMultilingualNetworkNameItem[]];
    parse_dvb_multilingual_service_name(): [boolean, DvbMultilingualServiceNameItem[]];
    parse_dvb_network_name(): [boolean, string];
    parse_dvb_parental_rating(): [boolean, DVBParentalRatingItem[]];
    parse_dvb_private_data_specifier(): [boolean, number, Uint8Array | null];
    parse_dvb_scrambling(): [boolean, DVBScramblingModeType];
    parse_dvb_service(): [boolean, DVBServiceType | null, string, string];
    parse_dvb_service_list(): [boolean, DVBServiceListItem[]];
    parse_dvb_short_event(): [boolean, string, string, string];
    parse_dvb_stream_identifier(): [boolean, number];
    parse_dvb_stuffing(): [boolean, number];
    parse_dvb_subtitling_idx(idx: number): [boolean, string, number, number, number];
    parse_dvb_subtitling_nb(): number;
    parse_dvb_t2_delivery_system(): [boolean, T2DeliverySystemDescriptor];
    parse_dvb_teletext_idx(idx: number): [boolean, string, DVBTeletextType | null, number, number];
    parse_dvb_teletext_nb(): number;
    parse_iso_639_language(): [boolean, ISO639LanguageDescriptor];
    parse_iso_639_language_idx(idx: number): [boolean, string, Iso639AudioType | null];
    parse_iso_639_language_nb(): number;
    parse_logical_channel(): [boolean, LogicalChannelDescriptor];
    parse_registration(): [boolean, number, Uint8Array | null];
    parse_satellite_delivery_system(): [boolean, SatelliteDeliverySystemDescriptor];
    parse_terrestrial_delivery_system(): [boolean, TerrestrialDeliverySystemDescriptor];
    static from_custom(tag: number, data: Uint8Array | string): Descriptor;
    static from_custom_with_extension(tag: number, tag_extension: number, data: Uint8Array | string): Descriptor;
    static from_dvb_network_name(name: string): Descriptor;
    static from_dvb_service(
        service_type: DVBServiceType,
        service_name?: string | null,
        service_provider?: string | null
    ): Descriptor;
    static from_dvb_subtitling(lang: string, type: number, composition: number, ancillary: number): Descriptor;
    static from_iso_639_language(language: string): Descriptor;
    static from_registration(format_identifier: string, additional_info?: Uint8Array | null): Descriptor;
    static parse_audio_preselection_dump(source: AudioPreselectionDescriptor): void;
    static parse_audio_preselection_free(source: AudioPreselectionDescriptor): void;
}

export class DvbMultilingualBouquetNameItem {
    static $gtype: GObject.GType<DvbMultilingualBouquetNameItem>;

    constructor(
        properties?: Partial<{
            language_code?: string;
            bouquet_name?: string;
        }>
    );
    constructor(copy: DvbMultilingualBouquetNameItem);

    // Fields
    language_code: string;
    bouquet_name: string;
}

export class DvbMultilingualComponentItem {
    static $gtype: GObject.GType<DvbMultilingualComponentItem>;

    constructor(
        properties?: Partial<{
            language_code?: string;
            description?: string;
        }>
    );
    constructor(copy: DvbMultilingualComponentItem);

    // Fields
    language_code: string;
    description: string;
}

export class DvbMultilingualNetworkNameItem {
    static $gtype: GObject.GType<DvbMultilingualNetworkNameItem>;

    constructor(
        properties?: Partial<{
            language_code?: string;
            network_name?: string;
        }>
    );
    constructor(copy: DvbMultilingualNetworkNameItem);

    // Fields
    language_code: string;
    network_name: string;
}

export class DvbMultilingualServiceNameItem {
    static $gtype: GObject.GType<DvbMultilingualServiceNameItem>;

    constructor(
        properties?: Partial<{
            language_code?: string;
            provider_name?: string;
            service_name?: string;
        }>
    );
    constructor(copy: DvbMultilingualServiceNameItem);

    // Fields
    language_code: string;
    provider_name: string;
    service_name: string;
}

export class EIT {
    static $gtype: GObject.GType<EIT>;

    constructor(copy: EIT);

    // Fields
    transport_stream_id: number;
    original_network_id: number;
    segment_last_section_number: number;
    last_table_id: number;
    actual_stream: boolean;
    present_following: boolean;
    events: EITEvent[];
}

export class EITEvent {
    static $gtype: GObject.GType<EITEvent>;

    constructor(copy: EITEvent);

    // Fields
    event_id: number;
    start_time: Gst.DateTime;
    duration: number;
    running_status: RunningStatus;
    free_CA_mode: boolean;
    descriptors: Descriptor[];
}

export class ExtendedEventDescriptor {
    static $gtype: GObject.GType<ExtendedEventDescriptor>;

    constructor(copy: ExtendedEventDescriptor);

    // Fields
    descriptor_number: number;
    last_descriptor_number: number;
    language_code: string;
    items: ExtendedEventItem[];
    text: string;

    // Members
    free(): void;
}

export class ExtendedEventItem {
    static $gtype: GObject.GType<ExtendedEventItem>;

    constructor(
        properties?: Partial<{
            item_description?: string;
            item?: string;
        }>
    );
    constructor(copy: ExtendedEventItem);

    // Fields
    item_description: string;
    item: string;
}

export class ISO639LanguageDescriptor {
    static $gtype: GObject.GType<ISO639LanguageDescriptor>;

    constructor(copy: ISO639LanguageDescriptor);

    // Fields
    nb_language: number;
    language: string[];
    audio_type: Iso639AudioType[];

    // Members
    descriptor_free(): void;
}

export class LogicalChannel {
    static $gtype: GObject.GType<LogicalChannel>;

    constructor(
        properties?: Partial<{
            service_id?: number;
            visible_service?: boolean;
            logical_channel_number?: number;
        }>
    );
    constructor(copy: LogicalChannel);

    // Fields
    service_id: number;
    visible_service: boolean;
    logical_channel_number: number;
}

export class LogicalChannelDescriptor {
    static $gtype: GObject.GType<LogicalChannelDescriptor>;

    constructor(copy: LogicalChannelDescriptor);

    // Fields
    nb_channels: number;
    channels: LogicalChannel[];
}

export class NIT {
    static $gtype: GObject.GType<NIT>;

    constructor();
    constructor(
        properties?: Partial<{
            actual_network?: boolean;
            network_id?: number;
            descriptors?: Descriptor[];
            streams?: NITStream[];
        }>
    );
    constructor(copy: NIT);

    // Fields
    actual_network: boolean;
    network_id: number;
    descriptors: Descriptor[];
    streams: NITStream[];

    // Constructors
    static ["new"](): NIT;
}

export class NITStream {
    static $gtype: GObject.GType<NITStream>;

    constructor();
    constructor(
        properties?: Partial<{
            transport_stream_id?: number;
            original_network_id?: number;
            descriptors?: Descriptor[];
        }>
    );
    constructor(copy: NITStream);

    // Fields
    transport_stream_id: number;
    original_network_id: number;
    descriptors: Descriptor[];

    // Constructors
    static ["new"](): NITStream;
}

export class PMT {
    static $gtype: GObject.GType<PMT>;

    constructor();
    constructor(
        properties?: Partial<{
            pcr_pid?: number;
            program_number?: number;
            descriptors?: Descriptor[];
            streams?: PMTStream[];
        }>
    );
    constructor(copy: PMT);

    // Fields
    pcr_pid: number;
    program_number: number;
    descriptors: Descriptor[];
    streams: PMTStream[];

    // Constructors
    static ["new"](): PMT;
}

export class PMTStream {
    static $gtype: GObject.GType<PMTStream>;

    constructor();
    constructor(
        properties?: Partial<{
            stream_type?: number;
            pid?: number;
            descriptors?: Descriptor[];
        }>
    );
    constructor(copy: PMTStream);

    // Fields
    stream_type: number;
    pid: number;
    descriptors: Descriptor[];

    // Constructors
    static ["new"](): PMTStream;
}

export class PatProgram {
    static $gtype: GObject.GType<PatProgram>;

    constructor();
    constructor(
        properties?: Partial<{
            program_number?: number;
            network_or_program_map_PID?: number;
        }>
    );
    constructor(copy: PatProgram);

    // Fields
    program_number: number;
    network_or_program_map_PID: number;

    // Constructors
    static ["new"](): PatProgram;
}

export class SCTESIT {
    static $gtype: GObject.GType<SCTESIT>;

    constructor();
    constructor(
        properties?: Partial<{
            encrypted_packet?: boolean;
            encryption_algorithm?: number;
            pts_adjustment?: number;
            cw_index?: number;
            tier?: number;
            splice_command_length?: number;
            splice_command_type?: SCTESpliceCommandType;
            splice_time_specified?: boolean;
            splice_time?: number;
            splices?: any[];
            descriptors?: any[];
            fully_parsed?: boolean;
            is_running_time?: boolean;
        }>
    );
    constructor(copy: SCTESIT);

    // Fields
    encrypted_packet: boolean;
    encryption_algorithm: number;
    pts_adjustment: number;
    cw_index: number;
    tier: number;
    splice_command_length: number;
    splice_command_type: SCTESpliceCommandType;
    splice_time_specified: boolean;
    splice_time: number;
    splices: any[];
    descriptors: any[];
    fully_parsed: boolean;
    is_running_time: boolean;

    // Constructors
    static ["new"](): SCTESIT;
}

export class SCTESpliceComponent {
    static $gtype: GObject.GType<SCTESpliceComponent>;

    constructor(
        properties?: Partial<{
            tag?: number;
            splice_time_specified?: boolean;
            splice_time?: number;
            utc_splice_time?: number;
        }>
    );
    constructor(copy: SCTESpliceComponent);

    // Fields
    tag: number;
    splice_time_specified: boolean;
    splice_time: number;
    utc_splice_time: number;

    // Constructors
    static ["new"](tag: number): SCTESpliceComponent;
}

export class SCTESpliceEvent {
    static $gtype: GObject.GType<SCTESpliceEvent>;

    constructor();
    constructor(
        properties?: Partial<{
            insert_event?: boolean;
            splice_event_id?: number;
            splice_event_cancel_indicator?: boolean;
            out_of_network_indicator?: boolean;
            program_splice_flag?: boolean;
            duration_flag?: boolean;
            splice_immediate_flag?: boolean;
            program_splice_time_specified?: boolean;
            program_splice_time?: number;
            utc_splice_time?: number;
            components?: any[];
            break_duration_auto_return?: boolean;
            break_duration?: number;
            unique_program_id?: number;
            avail_num?: number;
            avails_expected?: number;
        }>
    );
    constructor(copy: SCTESpliceEvent);

    // Fields
    insert_event: boolean;
    splice_event_id: number;
    splice_event_cancel_indicator: boolean;
    out_of_network_indicator: boolean;
    program_splice_flag: boolean;
    duration_flag: boolean;
    splice_immediate_flag: boolean;
    program_splice_time_specified: boolean;
    program_splice_time: number;
    utc_splice_time: number;
    components: any[];
    break_duration_auto_return: boolean;
    break_duration: number;
    unique_program_id: number;
    avail_num: number;
    avails_expected: number;

    // Constructors
    static ["new"](): SCTESpliceEvent;
}

export class SDT {
    static $gtype: GObject.GType<SDT>;

    constructor();
    constructor(
        properties?: Partial<{
            original_network_id?: number;
            actual_ts?: boolean;
            transport_stream_id?: number;
            services?: SDTService[];
        }>
    );
    constructor(copy: SDT);

    // Fields
    original_network_id: number;
    actual_ts: boolean;
    transport_stream_id: number;
    services: SDTService[];

    // Constructors
    static ["new"](): SDT;
}

export class SDTService {
    static $gtype: GObject.GType<SDTService>;

    constructor();
    constructor(
        properties?: Partial<{
            service_id?: number;
            EIT_schedule_flag?: boolean;
            EIT_present_following_flag?: boolean;
            running_status?: RunningStatus;
            free_CA_mode?: boolean;
            descriptors?: Descriptor[];
        }>
    );
    constructor(copy: SDTService);

    // Fields
    service_id: number;
    EIT_schedule_flag: boolean;
    EIT_present_following_flag: boolean;
    running_status: RunningStatus;
    free_CA_mode: boolean;
    descriptors: Descriptor[];

    // Constructors
    static ["new"](): SDTService;
}

export class SIT {
    static $gtype: GObject.GType<SIT>;

    constructor(copy: SIT);

    // Fields
    descriptors: Descriptor[];
    services: SITService[];
}

export class SITService {
    static $gtype: GObject.GType<SITService>;

    constructor(copy: SITService);

    // Fields
    service_id: number;
    running_status: RunningStatus;
    descriptors: Descriptor[];
}

export class SatelliteDeliverySystemDescriptor {
    static $gtype: GObject.GType<SatelliteDeliverySystemDescriptor>;

    constructor(copy: SatelliteDeliverySystemDescriptor);

    // Fields
    frequency: number;
    orbital_position: number;
    west_east: boolean;
    polarization: SatellitePolarizationType;
    roll_off: SatelliteRolloff;
    modulation_system: boolean;
    modulation_type: ModulationType;
    symbol_rate: number;
    fec_inner: DVBCodeRate;
}

export class Section {
    static $gtype: GObject.GType<Section>;

    constructor(pid: number, data: Uint8Array | string);
    constructor(copy: Section);

    // Fields
    section_type: SectionType;
    pid: number;
    table_id: number;
    subtable_extension: number;
    version_number: number;
    current_next_indicator: boolean;
    section_number: number;
    last_section_number: number;
    crc: number;

    // Constructors
    static ["new"](pid: number, data: Uint8Array | string): Section;

    // Members
    get_atsc_cvct(): AtscVCT;
    get_atsc_eit(): AtscEIT;
    get_atsc_ett(): AtscETT;
    get_atsc_mgt(): AtscMGT;
    get_atsc_rrt(): AtscRRT;
    get_atsc_stt(): AtscSTT;
    get_atsc_tvct(): AtscVCT;
    get_bat(): BAT;
    get_cat(): Descriptor[];
    get_data(): GLib.Bytes;
    get_eit(): EIT;
    get_nit(): NIT;
    get_pat(): PatProgram[];
    get_pmt(): PMT;
    get_scte_sit(): SCTESIT;
    get_sdt(): SDT;
    get_sit(): SIT;
    get_tdt(): Gst.DateTime;
    get_tot(): TOT;
    get_tsdt(): Descriptor[];
    packetize(): [number, number];
    send_event(element: Gst.Element): boolean;
    static from_atsc_mgt(mgt: AtscMGT): Section;
    static from_atsc_rrt(rrt: AtscRRT): Section;
    static from_atsc_stt(stt: AtscSTT): Section;
    static from_nit(nit: NIT): Section;
    static from_pat(programs: PatProgram[], ts_id: number): Section;
    static from_pmt(pmt: PMT, pid: number): Section;
    static from_scte_sit(sit: SCTESIT, pid: number): Section;
    static from_sdt(sdt: SDT): Section;
}

export class T2DeliverySystemCell {
    static $gtype: GObject.GType<T2DeliverySystemCell>;

    constructor(copy: T2DeliverySystemCell);

    // Fields
    cell_id: number;
    centre_frequencies: number[];
    sub_cells: T2DeliverySystemCellExtension[];
}

export class T2DeliverySystemCellExtension {
    static $gtype: GObject.GType<T2DeliverySystemCellExtension>;

    constructor(
        properties?: Partial<{
            cell_id_extension?: number;
            transposer_frequency?: number;
        }>
    );
    constructor(copy: T2DeliverySystemCellExtension);

    // Fields
    cell_id_extension: number;
    transposer_frequency: number;
}

export class T2DeliverySystemDescriptor {
    static $gtype: GObject.GType<T2DeliverySystemDescriptor>;

    constructor(copy: T2DeliverySystemDescriptor);

    // Fields
    plp_id: number;
    t2_system_id: number;
    siso_miso: number;
    bandwidth: number;
    guard_interval: TerrestrialGuardInterval;
    transmission_mode: TerrestrialTransmissionMode;
    other_frequency: boolean;
    tfs: boolean;
    cells: T2DeliverySystemCell[];

    // Members
    free(): void;
}

export class TOT {
    static $gtype: GObject.GType<TOT>;

    constructor(copy: TOT);

    // Fields
    utc_time: Gst.DateTime;
    descriptors: Descriptor[];
}

export class TerrestrialDeliverySystemDescriptor {
    static $gtype: GObject.GType<TerrestrialDeliverySystemDescriptor>;

    constructor(copy: TerrestrialDeliverySystemDescriptor);

    // Fields
    frequency: number;
    bandwidth: number;
    priority: boolean;
    time_slicing: boolean;
    mpe_fec: boolean;
    constellation: ModulationType;
    hierarchy: TerrestrialHierarchy;
    code_rate_hp: DVBCodeRate;
    code_rate_lp: DVBCodeRate;
    guard_interval: TerrestrialGuardInterval;
    transmission_mode: TerrestrialTransmissionMode;
    other_frequency: boolean;
}
