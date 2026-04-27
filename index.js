const { readTasks } = require('./tasks');
const [,, cmd] = process.argv;

if (cmd === 'list') {
    const tasks = readTasks();
    if (tasks.length === 0) {
        console.log('no hay tareas.');
    } else {
        tasks.forEach((t,i) => {
            const icon = t.done ? 'a' : 'o';
            console.log(`\${icon} [\${i+1}] \${t.title}`);

        });
    }
}
if (!cmd) {
    console.log('TaskMaster CLI - usa: node index.js <comando>');
}