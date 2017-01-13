# Gulp-Boilerplate
A flexible boilerplate project for Gulp which supports environments, environment variables, and command-line arguments

### Environments

Environments can be set globally for a gulp build by passing the name of the environment as a command-line argument to the gulp build, which will override any environment set by an environment's default task. By default, the project has `dev` and `prod` environments.

```
gulp --env prod

or

gulp --prod
```

Additional arguments can be added. The easiest way would be to duplicate one of the existing files in `/gulp/environments/` and change it accordingly.

### Environment Variables

Environment variables live in the root of the project in `env.json` or `env.<environment>.json`. Environment varibles will use the environment-specific file first, falling back to the default if necessary.

### Configuration

The basic Gulp project sets up a config file in `/gulp/config.js`. Additional configurations should go in `/gulp/config/`, and should follow the style already set up. By convention, the name of the file should be `<task name>.config.js`, where `<task name>` matches the name of a file in `/gulp/tasks/` which will be the primary user of those configurations.

### Tasks

Tasks should go in `/gulp/tasks/`. The name of the file should roughly match the name or function of the task, like `/gulp/tasks/<task name>.task.js`, but it is not necessary. It is also not necessary to match the config file name to this, but should for clarity.
