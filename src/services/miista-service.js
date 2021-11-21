function useMiistaService() {

    class MiistaService {

        async loadOptions() {
            const json = require('./miista-export.json');
            return json;
        }
    }
    return [new MiistaService()];
}
export { useMiistaService }