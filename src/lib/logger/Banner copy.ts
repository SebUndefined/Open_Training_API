import chalk from 'chalk';
import figlet from 'figlet';

enum FigletColor {
    Blue,
    Green,
    Red,
    Orange,
}

/**
 * 
 */
export default class Banner {

    /**
     * 
     * @param text 
     * @param color 
     */
    public static printTitle(text: string, color: FigletColor = FigletColor.Blue) : void {
        figlet(text, 'Standard', function(err, data,) {
            if (err) {
                console.log('Something went wrong...');
                console.dir(err);
                return;
            }
            switch(color){
                default:
                case FigletColor.Blue:
                    console.log(chalk.blue(data));
                    break;
                case FigletColor.Green:
                    console.log(chalk.green(data));
                    break;
                case FigletColor.Orange:
                    console.log(chalk.yellow(data));
                    break;
                case FigletColor.Red:
                    console.log(chalk.red(data));
                    break;
            }
        });
    }
}