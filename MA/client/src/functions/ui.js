import ZoneHandler from './zoneClass';


export default class UIHandler {
    constructor(scene) {

        this.zoneHandler = new ZoneHandler(scene);

        this.bildGround = () => {
             scene.add.image(1200, 780, 'background').setScale(3.4, 3.4)
        }

        this.buildZones = () => {

            scene.dropZone = this.zoneHandler.renderZone(1000, 1100)
            this.zoneHandler.renderOutline(scene.dropZone)

            scene.opponentDropZone = this.zoneHandler.renderZone(1000, 500)
            this.zoneHandler.renderOutline(scene.opponentDropZone)

        }

        this.buildPlayerAreas = () => {

            scene.playerHandArea = scene.add.rectangle(1000, 1400, 850, 230)
            scene.playerHandArea.setStrokeStyle(6, 0x00ffdd)
            scene.playerDeckArea = scene.add.rectangle(1700, 1400, 155, 215)
            scene.playerDeckArea.setStrokeStyle(3, 0x00ffff)
            
            scene.opponentHandArea = scene.add.rectangle(1000, 200, 850, 230)
            scene.opponentHandArea.setStrokeStyle(6, 0x00ffdd)
            scene.opponentDeckArea = scene.add.rectangle(1700, 200, 155, 215)
            scene.opponentDeckArea.setStrokeStyle(3, 0x00ffff)
            
        }

        this.buildGameText = (text) => {
            scene.dealCards = scene.add.text(1500, 800, text).setFontSize(48)
        }

   

        this.biuldPointsAreas = () => {
            scene.playerPointsArea = scene.add.rectangle(250, 1400, 450, 50)
            scene.playerPointsArea.setStrokeStyle(3, 0x708090)

            scene.opponentPointsArea = scene.add.rectangle(250, 200, 450, 50)
            scene.opponentPointsArea.setStrokeStyle(3, 0x708090)
        }

        this.buildUI = () => {
            this.bildGround()
            this.buildZones()
            this.buildPlayerAreas()
            this.buildGameText("Ready to fight")
            this.biuldPointsAreas()
        }

    }
}