const SYSTEM_CONFIG = {
    // Server connection settings
    SERVER: {
        // Default server URL (can be overridden at runtime)
        DEFAULT_URL: "coated-linked-spies-visits.trycloudflare.com",

        // Connection retry settings
        RETRY_COUNT: 3,
        RETRY_INTERVAL_MS: 2000,
    },

    // Game settings
    GAME: {
        DEFAULT_ROOM: "online_player_room",
    }
};

export default SYSTEM_CONFIG; 