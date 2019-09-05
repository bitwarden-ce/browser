import MainBackground from './background/main.background';

const bytegardenMain = (window as any).bytegardenMain = new MainBackground();
bytegardenMain.bootstrap().then(() => {
    // Finished bootstrapping
});
