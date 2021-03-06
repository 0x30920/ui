import { errorHandler } from "~/util/Utils";

export const state = () => ({ hero: [], artifact: [] });

export const getters = {
    all: (state) => state,
    latestHeroes: (state) => state.hero,
    latestArtifacts: (state) => state.artifact,
};

export const mutations = {
    SET_LATEST(state, latest) {
        state.hero = latest.hero;
        state.artifact = latest.artifact;
    },
};

export const actions = {
    getList({ dispatch, commit }) {
        return new Promise((resolve, reject) => {
            const listGetter = this.getters["latest/all"];
            if (listGetter?.length) {
                resolve(listGetter);
                return;
            }
            this.$axios
                .get("latest", { headers: { "x-e7db-lang": this.$i18n.locale }, params: { lang: this.$i18n.locale } })
                .then((r) => {
                    commit("SET_I18N", this.$i18n.locale, { root: true });
                    return r.data.results;
                })
                .catch((error) => {
                    errorHandler({ dispatch, reject }, error, "latest list");
                })
                .then((latest) => {
                    if (latest?.length) {
                        commit("SET_LATEST", latest[0]);
                        resolve(latest);
                    } else {
                        const error = {
                            stack: `results.length === 0 for latest list`,
                            message: "Error loading list",
                        };
                        errorHandler({ dispatch, reject }, error, "latest list");
                    }
                });
        });
    },
};
